document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function () {
      this.classList.toggle('open');
    });
  });