// JavaScript om de menu-items te laten werken als knoppen
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        // Voer de actie uit die je wilt uitvoeren als de gebruiker op de link klikt
    });
});





const questions = document.querySelectorAll('.questions > *');
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');

let currentQuestion = 0;

function showQuestion(index) {
    questions.forEach((question, i) => {
        if (i === index) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });
}

previousButton.addEventListener('click', () => {
    currentQuestion--;
    showQuestion(currentQuestion);
});

nextButton.addEventListener('click', () => {
    currentQuestion++;
    showQuestion(currentQuestion);
});

showQuestion(currentQuestion);