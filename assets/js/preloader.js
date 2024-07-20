document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            var preloader = document.querySelector('.preloader');
            preloader.classList.add('hidden');
        }, 1500); // 2.5 seconds delay
    });
});