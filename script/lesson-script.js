// lesson-script.js - Improved JavaScript for English Lesson Page

(function() { // IIFE to encapsulate script and prevent global scope pollution

    console.log("Lesson page loaded!"); // Initialization log

    /* ------------------------------------ */
    /* 1. Smooth Scrolling for Navigation */
    /* ------------------------------------ */

    function smoothScrollToSection(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    document.querySelectorAll('.lesson-top-nav a, .lesson-quick-nav a, .lesson-overview-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollToSection(targetId);
        });
    });

    /* ------------------------------------ */
    /* 2. Lesson Progress Bar Update on Scroll - UPDATED FOR THERMOMETER */
    /* ------------------------------------ */

    const lessonSections = document.querySelectorAll('.lesson-section');
    const lessonProgress = document.getElementById('lesson-progress');
    const progressPercentageSpan = document.getElementById('progress-percentage'); // More descriptive name

    // **NEW: Get reference to the thermometer fill element**
    const thermometerFill = document.getElementById('thermometer-fill');

    function updateProgressBar() {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = window.scrollY; // Use window.scrollY for better cross-browser compatibility
        let progress = 0;

        if (totalHeight > 0) {
            progress = (scrolled / totalHeight) * 100;
        }

        lessonProgress.value = progress; // Standard progress bar (still updated)
        progressPercentageSpan.textContent = `${Math.round(progress)}% Complete`; // Update percentage text

        // **NEW: Update thermometer fill height based on progress**
        if (thermometerFill) { // Check if the thermometer element exists (for safety)
            thermometerFill.style.height = `${progress}%`;
        }
    }

    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('load', updateProgressBar); // Initial update on page load

    /* ------------------------------------ */
    /* 3. Donation Message Functionality */
    /* ------------------------------------ */

    const donationMessage = document.getElementById('donation-message');
    const donationCloseButton = donationMessage.querySelector('.cancel-button'); // Get the close button using querySelector

    function showDonationMessage() {
        donationMessage.removeAttribute('hidden');
        donationMessage.setAttribute('aria-hidden', 'false');
    }

    function hideDonationMessage() {
        donationMessage.setAttribute('hidden', 'hidden');
        donationMessage.setAttribute('aria-hidden', 'true');
    }

    // Attach event listener to the close button
    if (donationCloseButton) {
        donationCloseButton.addEventListener('click', hideDonationMessage);
    }

    // Show the message after 5 minutes (300000 milliseconds)
    setTimeout(showDonationMessage, 300000);

    /* ------------------------------------ */
    /* 4. Interactive Elements (Example - Expandable Overview - Already in HTML as <details>) */
    /* - Removed Example JS for Show/Hide Vocabulary, Exercises (Out of Scope/Not in HTML) */
    /* ------------------------------------ */

    // No JavaScript needed for <details> element for basic expand/collapse functionality.
    // If you need custom JS interaction for other elements (e.g., exercises, interactive quizzes),
    // you would add event listeners and logic within this section, similar to the smooth scroll example.

})(); // End IIFE