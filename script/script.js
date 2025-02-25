const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const bars = document.querySelectorAll('.bar'); // Select all bars for animation
const navLinksA = navLinks.querySelectorAll('a'); // Select all links inside navLinks

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate hamburger icon
    bars.forEach((bar, index) => {
        if (navLinks.classList.contains('active')) {
            if (index === 0) {
                bar.classList.add('bar-rotate-1'); // Rotate first bar
            } else if (index === 1) {
                bar.classList.add('bar-hide');    // Hide middle bar
            } else if (index === 2) {
                bar.classList.add('bar-rotate-2'); // Rotate last bar
            }
        } else {
            if (index === 0) {
                bar.classList.remove('bar-rotate-1'); // Revert rotation
            } else if (index === 1) {
                bar.classList.remove('bar-hide');    // Show middle bar
            } else if (index === 2) {
                bar.classList.remove('bar-rotate-2'); // Revert rotation
            }
        }
    });
});

// Close navigation menu when a link is clicked (and smooth scroll for anchor links)
navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('active');
        bars.forEach((bar, index) => { // Revert hamburger animation when nav closes
            if (index === 0) {
                bar.classList.remove('bar-rotate-1');
            } else if (index === 1) {
                bar.classList.remove('bar-hide');
            } else if (index === 2) {
                bar.classList.remove('bar-rotate-2');
            }
        });

        // Smooth scrolling for anchor links
        if (event.target.getAttribute('href').startsWith('#')) {
            event.preventDefault(); // Prevent default jump
            const targetId = event.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});