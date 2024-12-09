document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');

        document.querySelectorAll('nav ul li a').forEach(function(element) {
            element.classList.toggle('dark-mode');
        });
        document.querySelectorAll('#sec_principal').forEach(function(element) {
            element.classList.toggle('dark-mode');
        });
    });
});

