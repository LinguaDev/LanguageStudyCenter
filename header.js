document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                navLinks.classList.remove('active');
            }
        });
    }
});
// This code MUST be in header.js
function initializeHamburgerMenu() { // Put inside a function
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                navLinks.classList.remove('active');
            }
        });
    }
}