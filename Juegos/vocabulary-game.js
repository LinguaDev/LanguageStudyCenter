// DOM Elements
const inputSection = document.getElementById('input-section');
const quizSection = document.getElementById('quiz-section');
const finalScoreSection = document.getElementById('final-score-section');
const manualInput = document.getElementById('manual-input');
const startButton = document.getElementById('start-button');
const cardContent = document.getElementById('card-content');
const controls = document.getElementById('controls');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const restartButton = document.getElementById('restart-button');

// Game Variables
let flashcards = [];
let currentCard = null;
const threshold = 2; // Number of correct answers needed to memorize a card

// Parse Input Function
function parseInput() {
    const input = manualInput.value.trim();
    const lines = input.split('\n').filter(line => line.includes(':'));
    flashcards = lines.map(line => {
        const [term, definition] = line.split(':').map(str => str.trim());
        return { term, definition, correctCount: 0 };
    });
}

// Start Game Function
function startGame() {
    parseInput();
    if (flashcards.length === 0) {
        alert('Please enter at least one valid term-definition pair.');
        return;
    }
    inputSection.style.display = 'none';
    quizSection.style.display = 'block';
    selectNextCard();
}

// Select Next Card Function
function selectNextCard() {
    const nonMemorized = flashcards.filter(card => card.correctCount < threshold);
    if (nonMemorized.length === 0) {
        endGame();
        return;
    }
    currentCard = nonMemorized[Math.floor(Math.random() * nonMemorized.length)];
    displayCard();
}

// Display Card Function
function displayCard() {
    cardContent.innerHTML = `<h2>${currentCard.term}</h2>`;
    controls.innerHTML = `<button id="reveal-button">Reveal Definition</button>`;
    document.getElementById('reveal-button').addEventListener('click', revealDefinition);
    updateProgress();
}

// Reveal Definition Function
function revealDefinition() {
    cardContent.innerHTML = `<h2>${currentCard.definition}</h2>`;
    controls.innerHTML = `
        <button id="correct-button">Correct</button>
        <button id="partially-correct-button">Partially Correct</button>
        <button id="incorrect-button">Incorrect</button>
    `;
    document.getElementById('correct-button').addEventListener('click', () => handleResponse('correct'));
    document.getElementById('partially-correct-button').addEventListener('click', () => handleResponse('partially-correct'));
    document.getElementById('incorrect-button').addEventListener('click', () => handleResponse('incorrect'));
}

// Handle Response Function
function handleResponse(response) {
    if (response === 'correct') {
        currentCard.correctCount++;
    }
    // For other responses, do nothing to the count
    selectNextCard();
}

// Update Progress Function
function updateProgress() {
    const memorizedCount = flashcards.filter(card => card.correctCount >= threshold).length;
    const total = flashcards.length;
    const percentage = (memorizedCount / total) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `Memorized: ${memorizedCount} / ${total}`;
}

// End Game Function
function endGame() {
    quizSection.style.display = 'none';
    finalScoreSection.style.display = 'block';
    document.getElementById('final-score').textContent = 'Congratulations! You have memorized all the cards.';
}

// Event Listeners
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', () => {
    finalScoreSection.style.display = 'none';
    inputSection.style.display = 'block';
    flashcards = [];
    currentCard = null;
});