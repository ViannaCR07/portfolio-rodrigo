(function () {
  function initContato() {
    var form = document.getElementById('form-contato');
    var sucesso = document.getElementById('mensagem-sucesso');

    if (!form || typeof emailjs === 'undefined') {
      return;
    }

    emailjs.init('ekuX5B0MEFrjNItVH');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      emailjs.sendForm('service_k6427qd', 'template_oz3d948', form).then(
        function () {
          if (sucesso) {
            sucesso.hidden = false;
          }
          form.reset();
        },
        function (error) {
          var prefix = window.siteI18n && window.siteI18n.t ? window.siteI18n.t('contact_error') : 'Erro ao enviar';
          alert(prefix + ': ' + JSON.stringify(error));
        }
      );
    });
  }

  document.addEventListener('DOMContentLoaded', initContato);
})();
