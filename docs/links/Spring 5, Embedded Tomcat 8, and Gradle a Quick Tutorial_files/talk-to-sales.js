  var Auth0ContactForm = window.Auth0ContactForm.default;
  var contactFormOptions = {
    onModalOpen: function () {
      metricsLib.track('open:talk-to-sales');
    },
    onFormSuccess: function (metricsData) {
      metricsLib.track('register:lead:talk-to-sales-modal', metricsData);
      metricsLib.track('sent:talk-to-sales', metricsData);
    },
    onFormFail: function (metricsData) {
      metricsLib.track('fail:register:lead:talk-to-sales-modal', metricsData);
      metricsLib.track('fail-sent:talk-to-sales', metricsData);
    }
  };
  var contactForm = new Auth0ContactForm(contactFormOptions);


  $('.talk-to-sales').on('click', function() {
    window.metricsLib.track('click:talk-to-sales', {}, ()=> window.location = "/contact-us");
  });
