document.addEventListener('DOMContentLoaded', function() {
    // 1. **Select HTML Elements**
    //    We get references to the language toggle buttons and the
    //    content sections for English and Spanish using their IDs and classes.
    const langToggleEn = document.getElementById('lang-toggle-en'); // Button to switch to English
    const langToggleEs = document.getElementById('lang-toggle-es'); // Button to switch to Spanish
    const englishContent = document.querySelectorAll('.en');         // All elements with class 'en' (English text)
    const spanishContent = document.querySelectorAll('.es');         // All elements with class 'es' (Spanish text)

    // 2. **Define Functions to Show/Hide Content Based on Language**

    /**
     * Function to display English content and hide Spanish content.
     * It also updates the visual 'active' state of the language buttons.
     */
    function showEnglishContent() {
        englishContent.forEach(element => element.classList.remove('hidden')); // Make all English content visible by removing 'hidden' class
        spanishContent.forEach(element => element.classList.add('hidden'));   // Hide all Spanish content by adding 'hidden' class
        langToggleEn.classList.add('active');                             // Set English button to 'active' visual state
        langToggleEs.classList.remove('active');                          // Remove 'active' visual state from Spanish button
    }

    /**
     * Function to display Spanish content and hide English content.
     * It also updates the visual 'active' state of the language buttons.
     */
    function showSpanishContent() {
        englishContent.forEach(element => element.classList.add('hidden'));    // Hide all English content by adding 'hidden' class
        spanishContent.forEach(element => element.classList.remove('hidden')); // Make all Spanish content visible by removing 'hidden' class
        langToggleEs.classList.add('active');                             // Set Spanish button to 'active' visual state
        langToggleEn.classList.remove('active');                          // Remove 'active' visual state from English button
    }

    // 3. **Attach Event Listeners to the Language Toggle Buttons**
    //    We add 'click' event listeners to both the English and Spanish language buttons.
    //    When a button is clicked, its corresponding function is called to toggle the language.

    langToggleEn.addEventListener('click', showEnglishContent); // When English button is clicked, call showEnglishContent function
    langToggleEs.addEventListener('click', showSpanishContent); // When Spanish button is clicked, call showSpanishContent function

    // 4. **Determine Initial Language Display on Page Load**
    //    This part of the script decides which language (English or Spanish) to display
    //    when the page is first opened. It checks the user's browser language setting.

    const browserLanguage = navigator.language || navigator.userLanguage; // Get preferred browser language (or user language for older IE)
    const userPrefersSpanish = browserLanguage.toLowerCase().startsWith('es'); // Check if browser language starts with 'es' (Spanish)

    if (userPrefersSpanish) {
        showSpanishContent(); // If user's browser preference is Spanish, display Spanish content initially
    } else {
        showEnglishContent(); // Default: If browser preference is not Spanish (or not detectable), display English content initially
    }
});