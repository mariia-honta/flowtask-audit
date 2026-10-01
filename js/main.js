document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.faq__q').forEach(function (question) {
    question.addEventListener('click', function () {
      var isOpen = question.parentElement.classList.toggle('is-open');
      question.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  var form = document.getElementById('trial-form');
  if (form) {
    var email = document.getElementById('trial-email');
    var error = document.getElementById('trial-error');
    var status = document.getElementById('trial-status');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var value = email.value.trim();
      var message = '';

      if (!value) {
        message = 'Please enter your work email.';
      } else if (!email.checkValidity()) {
        message = 'Please enter a valid email address, for example name@company.com.';
      }

      if (message) {
        email.setAttribute('aria-invalid', 'true');
        error.textContent = message;
        email.focus();
        return;
      }

      email.removeAttribute('aria-invalid');
      error.textContent = '';
      form.hidden = true;
      status.textContent = 'Thanks — check your inbox, the workspace is being created.';
      status.focus();
    });

    email.addEventListener('input', function () {
      if (email.getAttribute('aria-invalid') === 'true') {
        email.removeAttribute('aria-invalid');
        error.textContent = '';
      }
    });
  }

});
