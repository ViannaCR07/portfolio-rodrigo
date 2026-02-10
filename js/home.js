(function () {
  var CACHE_TTL_MS = 10 * 60 * 1000;
  var MODE_KEY = 'weather_mode_v1';
  var COORDS_KEY = 'weather_coords_v1';

  function getI18nText(key, fallback) {
    if (window.siteI18n && window.siteI18n.t) {
      return window.siteI18n.t(key);
    }
    return fallback;
  }

  function getLang() {
    return window.siteI18n && window.siteI18n.getLanguage ? window.siteI18n.getLanguage() : 'pt';
  }

  function getMode() {
    return localStorage.getItem(MODE_KEY) === 'geo' ? 'geo' : 'city';
  }

  function setMode(mode) {
    localStorage.setItem(MODE_KEY, mode === 'geo' ? 'geo' : 'city');
  }

  function readCoords() {
    try {
      var raw = localStorage.getItem(COORDS_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function writeCoords(coords) {
    try {
      localStorage.setItem(COORDS_KEY, JSON.stringify(coords));
    } catch (error) {
      // ignore storage errors
    }
  }

  function getCacheKey(queryId, lang) {
    return 'weather_cache_v3_' + queryId + '_' + lang;
  }

  function readCache(cacheKey) {
    try {
      var raw = localStorage.getItem(cacheKey);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function writeCache(cacheKey, payload) {
    try {
      localStorage.setItem(cacheKey, JSON.stringify(payload));
    } catch (error) {
      // ignore storage errors
    }
  }

  function formatUpdatedTime(timestampMs, lang) {
    var locale = lang === 'en' ? 'en-US' : 'pt-BR';
    var formatted = new Date(timestampMs).toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit'
    });
    return getI18nText('weather_updated', 'Updated at') + ' ' + formatted;
  }

  function renderWeather(info, payload) {
    var updatedText = formatUpdatedTime(payload.updatedAt, payload.lang);

    info.innerHTML =
      '<strong>' + payload.cityLabel + '</strong><br>' +
      '<img src="https://openweathermap.org/img/wn/' + payload.icon + '.png" alt="' + payload.condition + '" style="vertical-align: middle;"> ' +
      '<strong>' + payload.temp + '°C</strong><br>' +
      '<span style="font-size:0.85em;">' + payload.condition.charAt(0).toUpperCase() + payload.condition.slice(1) + '</span><br>' +
      '<small style="opacity:.8;">' + updatedText + '</small>';
  }

  function getErrorMessage(status) {
    if (status === 401) return getI18nText('weather_error_auth', 'Weather API authentication error');
    if (status === 404) return getI18nText('weather_error_city', 'City not found');
    if (status === 429) return getI18nText('weather_error_limit', 'Weather API rate limit reached');
    return getI18nText('weather_error', 'Failed to load weather');
  }

  function getCoordsFromBrowser() {
    return new Promise(function (resolve, reject) {
      if (!navigator.geolocation) {
        reject(new Error('GEO_UNAVAILABLE'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        function (position) {
          resolve({
            lat: Number(position.coords.latitude.toFixed(4)),
            lon: Number(position.coords.longitude.toFixed(4))
          });
        },
        function (error) {
          reject(error);
        },
        {
          enableHighAccuracy: false,
          timeout: 7000,
          maximumAge: 5 * 60 * 1000
        }
      );
    });
  }

  async function fetchWithTimeout(url, timeoutMs) {
    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, timeoutMs);

    try {
      return await fetch(url, { signal: controller.signal });
    } finally {
      clearTimeout(timeout);
    }
  }

  function syncGeoButton() {
    var btn = document.getElementById('geo-toggle');
    if (!btn) return;

    var mode = getMode();
    btn.textContent = mode === 'geo'
      ? getI18nText('weather_use_default', 'Use Sao Paulo')
      : getI18nText('weather_use_location', 'Use my location');
  }

  function getQueryInfo(lang) {
    var mode = getMode();
    var cityQuery = 'Sao Paulo';

    if (mode === 'geo') {
      var coords = readCoords();
      if (coords && typeof coords.lat === 'number' && typeof coords.lon === 'number') {
        return {
          id: 'geo_' + coords.lat + '_' + coords.lon,
          cityLabel: getI18nText('weather_city', 'São Paulo'),
          url: 'https://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon
        };
      }
    }

    return {
      id: 'city_sao_paulo',
      cityLabel: getI18nText('weather_city', 'São Paulo'),
      url: 'https://api.openweathermap.org/data/2.5/weather?q=' + cityQuery
    };
  }

  async function carregarClima() {
    var info = document.getElementById('info-clima');
    var widget = document.getElementById('clima-widget');
    if (!info || !widget) return;

    var apiKey = '2da4bf5e9a144f4992bb745f5fdcde88';
    var lang = getLang();
    var apiLang = lang === 'en' ? 'en' : 'pt_br';
    var now = Date.now();

    info.textContent = getI18nText('weather_loading', 'Loading weather...');
    syncGeoButton();

    var queryInfo = getQueryInfo(lang);
    var cacheKey = getCacheKey(queryInfo.id, lang);
    var cached = readCache(cacheKey);

    if (cached && now - cached.updatedAt < CACHE_TTL_MS) {
      renderWeather(info, cached);
      return;
    }

    var url = queryInfo.url + '&appid=' + apiKey + '&units=metric&lang=' + apiLang;

    try {
      var response = await fetchWithTimeout(url, 7000);

      if (!response.ok) {
        throw new Error('HTTP_' + response.status);
      }

      var data = await response.json();
      if (!data.main || !data.weather || !data.weather[0]) {
        throw new Error('INVALID_PAYLOAD');
      }

      var payload = {
        cityLabel: data.name || queryInfo.cityLabel,
        temp: Math.round(data.main.temp),
        condition: data.weather[0].description,
        icon: data.weather[0].icon,
        updatedAt: now,
        lang: lang
      };

      writeCache(cacheKey, payload);
      renderWeather(info, payload);
    } catch (error) {
      if (cached) {
        renderWeather(info, cached);
        return;
      }

      if (String(error.message).indexOf('HTTP_') === 0) {
        var status = Number(error.message.replace('HTTP_', ''));
        info.textContent = getErrorMessage(status);
        return;
      }

      info.textContent = getI18nText('weather_error_network', 'Network error while loading weather');
    }
  }

  async function handleGeoToggle() {
    var info = document.getElementById('info-clima');
    var currentMode = getMode();

    if (currentMode === 'geo') {
      setMode('city');
      syncGeoButton();
      carregarClima();
      return;
    }

    try {
      var coords = await getCoordsFromBrowser();
      writeCoords(coords);
      setMode('geo');
      syncGeoButton();
      carregarClima();
    } catch (error) {
      if (info) {
        if (error && (error.code === 1 || error.message === 'PERMISSION_DENIED')) {
          info.textContent = getI18nText('weather_geo_denied', 'Location permission denied');
        } else {
          info.textContent = getI18nText('weather_geo_unavailable', 'Geolocation unavailable');
        }
      }
    }
  }

  function initGeoButton() {
    var btn = document.getElementById('geo-toggle');
    if (!btn) return;

    btn.addEventListener('click', handleGeoToggle);
    syncGeoButton();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initGeoButton();
    carregarClima();
  });

  window.addEventListener('app:language-changed', function () {
    syncGeoButton();
    carregarClima();
  });
})();
