// script.js
// This file can be used for adding interactive elements or dynamic behavior.

// Example:  Adding a simple alert when the button is clicked.
const enrollButton = document.querySelector('.cta-button');

enrollButton.addEventListener('click', function(event) {
  // Prevent the default link behavior (navigation) for now.
  event.preventDefault();

  alert('Thank you for your interest!  Enrollment is coming soon.');

  // Later, you could replace this with code to actually redirect the user.
  // window.location.href = "your-enrollment-page.html";
});


// Another example:  Adding smooth scrolling to anchor links (if you have them)
// ... (code for smooth scrolling) ...