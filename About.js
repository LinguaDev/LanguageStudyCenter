// script.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Optional: Close the menu if a nav link is clicked (good UX)
navLinks.addEventListener('click', () => {
    if (window.innerWidth <= 768) { // Only close on smaller screens
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});