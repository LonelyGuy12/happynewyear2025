// JavaScript to add smooth scroll and interaction
document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('.container');
    container.style.transition = 'opacity 2s ease-in-out';

    // Smooth scroll to top after clicking the message
    container.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    // Add some interactive effects like glowing text
    setInterval(() => {
        document.querySelector('h1').classList.toggle('glow');
    }, 1000);
});
