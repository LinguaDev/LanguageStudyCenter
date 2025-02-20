// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Progress bar update on scroll
const lessonSections = document.querySelectorAll('.lesson-section');
const lessonProgress = document.getElementById('lesson-progress');
const progressText = document.getElementById('progress-text');

window.addEventListener('scroll', () => {
    let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    let progress = 0;

    if (totalHeight > 0) { // Avoid division by zero
        progress = (scrolled / totalHeight) * 100;
    }

    lessonProgress.value = progress;
    progressText.textContent = `${Math.round(progress)}% Complete`;
});

console.log("Lesson page loaded!");


// Example of how to add interactivity (e.g., show/hide content)

const vocabularySection = document.getElementById('vocabulary');
const pronunciationSection = document.getElementById('reading');
const grammarSection = document.getElementById('grammar');
const exercisesSection = document.getElementById('exercises');
const resourcesSection = document.getElementById('resources');
const quizSection = document.getElementById('quiz');


// Example: Show/hide vocabulary on button click (add a button to your HTML)

// const showVocabularyButton = document.createElement('button');
// showVocabularyButton.textContent = 'Show Vocabulary';
// vocabularySection.insertBefore(showVocabularyButton, vocabularySection.querySelector('ul')); // Add button before the list

// showVocabularyButton.addEventListener('click', () => {
//     vocabularySection.querySelector('ul').style.display = (vocabularySection.querySelector('ul').style.display === 'none') ? 'block' : 'block'; // Toggle visibility
// });

// Similar logic can be applied to other sections.


// Example:  Adding event listeners to exercises (you'll need to adapt these)

// const exercise1 = document.querySelector('.exercise-1'); // Replace with your actual selector
// if (exercise1) {
//     exercise1.addEventListener('click', () => {
//         // Handle exercise 1 click (e.g., show feedback, update score)
//         console.log("Exercise 1 clicked!");
//     });
// }

// ... (Add similar listeners for other exercises)
function showDonationMessage() {
    document.getElementById('donation-message').style.display = 'block';
}

function hideDonationMessage() {
    document.getElementById('donation-message').style.display = 'none';
}

// Show the message after 5 minutes (300000 milliseconds)
setTimeout(showDonationMessage, 300000);