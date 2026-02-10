(function () {
  var TRANSLATIONS = {
    pt: {
      meta_title: 'Portfólio Rodrigo Viana',
      nav_home: 'Início',
      nav_reports: 'Relatórios',
      nav_contact: 'Contato',
      nav_resume: 'Currículo',
      weather_loading: 'Carregando clima...',
      weather_city: 'São Paulo',
      weather_error: 'Erro ao carregar clima',
      weather_error_auth: 'Erro de autenticação na API do clima',
      weather_error_limit: 'Limite de requisições da API do clima',
      weather_error_city: 'Cidade não encontrada',
      weather_error_network: 'Falha de rede ao buscar clima',
      weather_updated: 'Atualizado às',
      weather_use_location: 'Usar minha localização',
      weather_use_default: 'Usar São Paulo',
      weather_geo_denied: 'Permissão de localização negada',
      weather_geo_unavailable: 'Geolocalização não disponível',
      hero_tag: 'Logística, Dados e BI',
      hero_name: 'Rodrigo Viana Rocha',
      hero_desc: '25 anos | São Paulo-SP | Profissional com experiência em logística, análise de dados, automação de processos e desenvolvimento de dashboards em Power BI.',
      hero_btn_reports: 'Ver Relatórios',
      hero_btn_resume: 'Ver Currículo',
      kpi_1_title: '6+ anos',
      kpi_1_desc: 'em logística e dados',
      kpi_2_title: 'Power BI',
      kpi_2_desc: 'dashboards operacionais',
      kpi_3_title: 'Python + SQL',
      kpi_3_desc: 'ETL e automações',
      about_title: 'Sobre Mim',
      about_desc: 'Sou graduado em Gestão da Qualidade, com MBAs em Gestão Estratégica de Processos e em Gestão, Logística e Operações Internacionais. Atuo na interface entre operação e dados para elevar eficiência e controle.',
      tech_title: 'Tecnologias',
      tech_1: 'Python (pandas, openpyxl, requests)',
      tech_2: 'Power BI e DAX',
      tech_3: 'SQL e automações ETL',
      tech_4: 'HTML, CSS, JavaScript',
      goal_title: 'Objetivo Profissional',
      goal_desc: 'Atuar em equipes de dados ou operações que utilizam tecnologia para gerar valor e tomar decisões com base em indicadores claros.',
      ops_title: 'Experiência Operacional',
      ops_desc: 'Experiência em logística, atendimento e operação. Atuação em SAC, operação logística e dados, criando dashboards e automações.',
      projects_title: 'Projetos em Destaque',
      project_1_title: 'Automação Python',
      project_1_desc: 'Projetos de ETL, análise de dados e automação de processos usando Python.',
      project_2_title: 'Dashboard Power BI',
      project_2_desc: 'Dashboards interativos com indicadores estratégicos e operacionais.',
      project_2_btn: 'Ver Relatório',
      project_3_title: 'Integrações Web',
      project_3_desc: 'Integração de APIs e sistemas web.',
      project_4_title: 'Dashboard em Python Streamlit',
      project_4_desc: 'Dashboard interativo com dados simulados de entregadores: KPIs operacionais, gráficos dinâmicos e ranking de performance.',
      project_4_btn_demo: 'Ver Projeto',
      project_4_btn_code: 'Ver Código no GitHub',
      resume_page_title: 'Currículo - Rodrigo Viana',
      resume_contact_line: '25 anos | São Paulo - SP | rodrigor.vianna07@gmail.com | (11) 97868-1580',
      resume_summary_title: 'Resumo Profissional',
      resume_summary_desc: 'Experiência em logística, análise de dados e automação de processos, com desenvolvimento de dashboards em Power BI e atuação próxima às áreas operacionais e de gestão para suportar decisões orientadas por dados.',
      resume_exp_title: 'Experiência Profissional',
      resume_exp_1: '<strong>Analista de Logística - Refit (Refinaria)</strong> (07/2025 - 02/2026)',
      resume_exp_2: 'Programação de rotas, acompanhamento de frota e controle de transportadoras para otimização de custos e prazos.',
      resume_exp_3: '<strong>Analista de Logística (Dados) - CR Express</strong> (03/2025 - 07/2025)',
      resume_exp_4: 'Criação de relatórios e dashboards no Power BI para performance operacional e tomada de decisão.',
      resume_exp_5: 'Integração e tratamento de dados com ETL em MySQL, além de suporte técnico aos times operacionais.',
      resume_exp_6: '<strong>Assistente de Logística (Dados) - CR Express</strong> (12/2021 - 03/2025)',
      resume_exp_7: 'Relatórios visuais de supply hours e performance logística, com análises comparativas de metas e resultados.',
      resume_exp_8: '<strong>Aprendiz em Qualidade - CONCREJATO</strong> (01/2020 - 06/2021)',
      resume_exp_9: 'Apoio em auditorias, inspeções de conformidade e controle documental com foco em qualidade e rastreabilidade.',
      resume_edu_title: 'Formação Acadêmica',
      resume_edu_1: 'MBA em Gestão, Logística e Operações Internacionais - Estácio (conclusão prevista: 11/2026)',
      resume_edu_2: 'MBA em Gestão Estratégica de Processos - Universidade São Judas Tadeu (concluído em 12/2025)',
      resume_edu_3: 'Graduação em Gestão da Qualidade - Estácio (concluído em 12/2024)',
      resume_courses_title: 'Cursos e Certificações',
      resume_course_1: 'Google Data Analytics - Google (EAD)',
      resume_course_2: 'Data Science - Alura (EAD)',
      resume_course_3: 'Assistente de Gestão da Qualidade - Estácio (EAD)',
      resume_skills_title: 'Habilidades Técnicas',
      resume_skills_desc: 'Power BI (DAX), SQL, Python, MySQL, Streamlit, Looker Studio, Tableau, Excel, PowerPoint, Word, Canva, Planilhas Google, Linguagem R, JavaScript, Google Cloud.',
      resume_lang_title: 'Idiomas',
      resume_lang_desc: 'Português (Nativo), Inglês (Básico - leitura técnica).',
      resume_download_title: 'Baixar Currículo PDF',
      resume_download_btn: 'Download do Currículo',
      contact_page_title: 'Contato - Rodrigo Viana',
      contact_title: 'Entre em Contato',
      contact_name: 'Seu nome',
      contact_email: 'Seu e-mail',
      contact_message: 'Sua mensagem',
      contact_send: 'Enviar Mensagem',
      contact_success: 'Mensagem enviada com sucesso!',
      contact_error: 'Erro ao enviar',
      reports_page_title: 'Relatórios Power BI - Rodrigo Viana',
      reports_title: 'Relatórios Power BI',
      reports_desc: 'Visualize os principais indicadores de desempenho operacional (dados simulados com NumPy).',
      reports_back: 'Voltar para o Portfólio',
      cookie_text: 'Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.',
      cookie_btn: 'Entendi',
      footer_copy: '© 2026 Rodrigo Viana - Todos os direitos reservados.',
      theme_light: 'Tema: Claro',
      theme_dark: 'Tema: Escuro',
      lang_switch: 'EN'
    },
    en: {
      meta_title: 'Rodrigo Viana Portfolio',
      nav_home: 'Home',
      nav_reports: 'Reports',
      nav_contact: 'Contact',
      nav_resume: 'Resume',
      weather_loading: 'Loading weather...',
      weather_city: 'Sao Paulo',
      weather_error: 'Failed to load weather',
      weather_error_auth: 'Weather API authentication error',
      weather_error_limit: 'Weather API rate limit reached',
      weather_error_city: 'City not found',
      weather_error_network: 'Network error while loading weather',
      weather_updated: 'Updated at',
      weather_use_location: 'Use my location',
      weather_use_default: 'Use Sao Paulo',
      weather_geo_denied: 'Location permission denied',
      weather_geo_unavailable: 'Geolocation unavailable',
      hero_tag: 'Logistics, Data and BI',
      hero_name: 'Rodrigo Viana Rocha',
      hero_desc: '25 years old | Sao Paulo-BR | Professional with experience in logistics planning, data analysis, process automation and Power BI dashboard development.',
      hero_btn_reports: 'View Reports',
      hero_btn_resume: 'View Resume',
      kpi_1_title: '6+ years',
      kpi_1_desc: 'in logistics and data',
      kpi_2_title: 'Power BI',
      kpi_2_desc: 'operational dashboards',
      kpi_3_title: 'Python + SQL',
      kpi_3_desc: 'ETL and automation',
      about_title: 'About Me',
      about_desc: 'I hold a degree in Quality Management, plus MBAs in Strategic Process Management and in Management, Logistics and International Operations. I work at the intersection of operations and data to improve efficiency and control.',
      tech_title: 'Technologies',
      tech_1: 'Python (pandas, openpyxl, requests)',
      tech_2: 'Power BI and DAX',
      tech_3: 'SQL and ETL automation',
      tech_4: 'HTML, CSS, JavaScript',
      goal_title: 'Career Goal',
      goal_desc: 'To work in data or operations teams that use technology to create value and drive decisions based on clear KPIs.',
      ops_title: 'Operational Experience',
      ops_desc: 'Background in logistics, customer operations and data. Experience building dashboards and automation workflows for operational teams.',
      projects_title: 'Featured Projects',
      project_1_title: 'Python Automation',
      project_1_desc: 'ETL, data analysis and process automation projects built with Python.',
      project_2_title: 'Power BI Dashboard',
      project_2_desc: 'Interactive dashboards with strategic and operational indicators.',
      project_2_btn: 'View Report',
      project_3_title: 'Web Integrations',
      project_3_desc: 'API and web systems integration.',
      project_4_title: 'Python Streamlit Dashboard',
      project_4_desc: 'Interactive dashboard with simulated courier data: operational KPIs, dynamic charts and performance ranking.',
      project_4_btn_demo: 'View Project',
      project_4_btn_code: 'View Code on GitHub',
      resume_page_title: 'Resume - Rodrigo Viana',
      resume_contact_line: '25 years old | Sao Paulo - SP | rodrigor.vianna07@gmail.com | +55 11 97868-1580',
      resume_summary_title: 'Professional Summary',
      resume_summary_desc: 'Experience in logistics planning, data analysis and process automation, with Power BI dashboard development and close collaboration with operations and management teams to support data-driven decisions.',
      resume_exp_title: 'Professional Experience',
      resume_exp_1: '<strong>Logistics Analyst - Refit (Refinery)</strong> (07/2025 - 02/2026)',
      resume_exp_2: 'Route planning, fleet tracking and carrier management focused on cost and lead-time optimization.',
      resume_exp_3: '<strong>Logistics Analyst (Data) - CR Express</strong> (03/2025 - 07/2025)',
      resume_exp_4: 'Created Power BI reports and dashboards for operational performance and decision support.',
      resume_exp_5: 'Data integration and treatment with MySQL ETL, plus technical support for operational teams.',
      resume_exp_6: '<strong>Logistics Assistant (Data) - CR Express</strong> (12/2021 - 03/2025)',
      resume_exp_7: 'Built visual reports for supply hours and logistics performance, including target-vs-result comparisons.',
      resume_exp_8: '<strong>Quality Apprentice - CONCREJATO</strong> (01/2020 - 06/2021)',
      resume_exp_9: 'Supported audits, compliance inspections and document control with focus on quality and traceability.',
      resume_edu_title: 'Education',
      resume_edu_1: 'MBA in Management, Logistics and International Operations - Estacio (expected: 11/2026)',
      resume_edu_2: 'MBA in Strategic Process Management - Sao Judas University (completed: 12/2025)',
      resume_edu_3: 'B.A. in Quality Management - Estacio (completed: 12/2024)',
      resume_courses_title: 'Courses and Certifications',
      resume_course_1: 'Google Data Analytics - Google (online)',
      resume_course_2: 'Data Science - Alura (online)',
      resume_course_3: 'Quality Management Assistant - Estacio (online)',
      resume_skills_title: 'Technical Skills',
      resume_skills_desc: 'Power BI (DAX), SQL, Python, MySQL, Streamlit, Looker Studio, Tableau, Excel, PowerPoint, Word, Canva, Google Sheets, R language, JavaScript, Google Cloud.',
      resume_lang_title: 'Languages',
      resume_lang_desc: 'Portuguese (Native), English (Basic - technical reading).',
      resume_download_title: 'Download PDF Resume',
      resume_download_btn: 'Download Resume',
      contact_page_title: 'Contact - Rodrigo Viana',
      contact_title: 'Get in Touch',
      contact_name: 'Your name',
      contact_email: 'Your email',
      contact_message: 'Your message',
      contact_send: 'Send Message',
      contact_success: 'Message sent successfully!',
      contact_error: 'Send error',
      reports_page_title: 'Power BI Reports - Rodrigo Viana',
      reports_title: 'Power BI Reports',
      reports_desc: 'View key operational performance indicators (NumPy simulated data).',
      reports_back: 'Back to Portfolio',
      cookie_text: 'This site uses cookies to improve your experience. By continuing, you agree with our privacy policy.',
      cookie_btn: 'Got it',
      footer_copy: '© 2026 Rodrigo Viana - All rights reserved.',
      theme_light: 'Theme: Light',
      theme_dark: 'Theme: Dark',
      lang_switch: 'PT'
    }
  };

  var lang = localStorage.getItem('site_lang') || 'pt';

  function getText(key) {
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || key;
  }

  function applyTranslations() {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-br';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = getText(key);
      if (value.indexOf('<strong>') >= 0) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', getText(key));
    });

    if (document.title) {
      var titleEl = document.querySelector('title[data-i18n]');
      if (titleEl) {
        document.title = getText(titleEl.getAttribute('data-i18n'));
      }
    }

    window.dispatchEvent(new CustomEvent('app:language-changed', { detail: { lang: lang } }));
  }

  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 600, once: true });
    }
  }

  function initThemeToggle() {
    function syncToggleLabel() {
      var isDark = document.body.classList.contains('dark-mode');
      document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
        btn.textContent = isDark ? getText('theme_dark') : getText('theme_light');
      });
    }

    if (localStorage.getItem('modo_escuro') === 'true') {
      document.body.classList.add('dark-mode');
    }

    syncToggleLabel();

    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('modo_escuro', document.body.classList.contains('dark-mode'));
        syncToggleLabel();
      });
    });

    window.addEventListener('app:language-changed', syncToggleLabel);
  }

  function initLanguageToggle() {
    function toggleLanguage() {
      lang = lang === 'pt' ? 'en' : 'pt';
      localStorage.setItem('site_lang', lang);
      applyTranslations();
      syncLangLabel();
    }

    function syncLangLabel() {
      document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
        btn.textContent = getText('lang_switch');
      });
    }

    syncLangLabel();
    window.toggleSiteLanguage = toggleLanguage;

    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.addEventListener('click', toggleLanguage);
    });
  }

  function initCookies() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    if (localStorage.getItem('cookies_aceitos') !== 'sim') {
      banner.style.display = 'block';
    }

    var acceptBtn = banner.querySelector('[data-accept-cookies]');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookies_aceitos', 'sim');
        banner.style.display = 'none';
      });
    }
  }

  window.siteI18n = {
    getLanguage: function () { return lang; },
    t: getText
  };

  document.addEventListener('DOMContentLoaded', function () {
    applyTranslations();
    initAOS();
    initLanguageToggle();
    initThemeToggle();
    initCookies();
  });
})();


