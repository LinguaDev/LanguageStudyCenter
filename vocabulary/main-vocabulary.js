const languageTabs = document.querySelector('.language-tabs');
const vocabularyContent = document.querySelector('.vocabulary-content');

const vocabularyData = {
    spanish: {
        a1: ["Hola", "Adiós", "Gracias", /* ... más palabras A1 */],
        a2: ["Casa", "Comida", "Trabajo", /* ... más palabras A2 */],
        // ... más niveles para español
    },
    english: {
        a1: ["Hello", "Goodbye", "Thank you", /* ... más palabras A1 */],
        a2: ["House", "Food", "Work", /* ... más palabras A2 */],
        // ... más niveles para inglés
    },
    french: {
        a1: ["Bonjour", "Au revoir", "Merci", /* ... más palabras A1 */],
        a2: ["Maison", "Nourriture", "Travail", /* ... más palabras A2 */],
        // ... más niveles para francés
    },
    // ... datos para otros idiomas
};


languageTabs.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const selectedLanguage = event.target.dataset.language;

        // Activa la pestaña seleccionada y desactiva las demás
        languageTabs.querySelectorAll('button').forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');

        displayVocabulary(selectedLanguage);
    }
});

function displayVocabulary(language) {
    let contentHTML = '';
    for (const level in vocabularyData[language]) {
        contentHTML += `<h3>${level.toUpperCase()}</h3><ul>`;
        vocabularyData[language][level].forEach(word => {
            contentHTML += `<li>${word}</li>`;
        });
        contentHTML += '</ul>';
    }
    vocabularyContent.innerHTML = contentHTML;
}

// Mostrar el vocabulario del primer idioma por defecto (español en este caso)
displayVocabulary('spanish');