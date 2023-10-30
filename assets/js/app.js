// Animation effects
AOS.init();

// Quiz questions and answers
const questions = [
  {
    question: "What is the capital of Japan?",
    options: ["a. Beijing", "b. Tokyo", "c. Seoul", "d. Bangkok"],
    answer: "b. Tokyo"
},
{
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["a. Oxygen", "b. Nitrogen", "c. Carbon dioxide", "d. Hydrogen"],
    answer: "c. Carbon dioxide"
},
{
    question: "What is the largest planet in our solar system?",
    options: ["a. Earth", "b. Mars", "c. Jupiter", "d. Saturn"],
    answer: "c. Jupiter"
},
{
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["a. William Shakespeare", "b. Charles Dickens", "c. Jane Austen", "d. Leo Tolstoy"],
    answer: "a. William Shakespeare"
},
{
    question: "Which country is known as the 'Land of the Pharaohs'?",
    options: ["a. Greece", "b. Egypt", "c. Italy", "d. Turkey"],
    answer: "b. Egypt"
},
{
    question: "What is the largest desert in the world?",
    options: ["a.  Arabian Deserta", "b. Gobi Desert", "c. Atacama Desert", "d. Sahara Desert"],
    answer: "d. Sahara Desert"
},
{
    question: "What is the largest ocean on Earth?",
    options: ["a. Atlantic Ocean", "b. Indian Ocean", "c. Pacific Ocean", "d. Arctic Ocean"],
    answer: "c. Pacific Ocean"
},
{
    question: "Which gas is responsible for the green color of leaves in plants?",
    options: ["a. Oxygen", "b. Carbon dioxide", "c. Chlorine", "d. Helium"],
    answer: "b. Carbon dioxide"
},
{
    question: "Who is the author of 'Oliver Twist'?",
    options: ["a. Harper Lee", "b. Mark Twain", "c. Charles Dickens", "d. F. Scott Fitzgerald"],
    answer: "c. Charles Dickens"
},
{
    question: "What is the chemical symbol for water?",
    options: ["a. O2", "b. H2O", "c. CO2", "d. NaCl"],
    answer: "b. H2O"
}
];

// Initialize variables for quiz functionality
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = questions.length;
let isQuizCompleted = false;

// Get HTML elements for interaction
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score-value');
const totalQuestionsElement = document.getElementById('total-questions');
const resultSection = document.querySelector('.result-section');
const retryButton = document.getElementById('retry-button');
const homeButton = document.getElementById('home-button');
const finalResultElement = document.getElementById('final-result');

// Function to display the current question and answer options
function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';

        question.options.forEach((option, index) => {
            const col = document.createElement('div');
            col.className = 'col-md-6';
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'btn btn-md btn-outline-secondary mt-3 rounded-pill option-button';
            button.addEventListener('click', () => selectAnswer(option));
            col.appendChild(button);
            optionsElement.appendChild(col);
        });

        if (isQuizCompleted) {
            submitButton.style.display = 'none';
        } else {
            submitButton.style.display = 'block';
        }
    } else {
        displayScore();
    }
}

// Function to handle user's answer selection
function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Wrong!';
    }

    currentQuestionIndex++;
    scoreElement.textContent = `${((score / totalQuestions) * 100).toFixed(2)}%`;
    displayQuestion();
}

// Function to display the final score and result
function displayScore() {
    questionElement.textContent = 'Quiz completed!';
    optionsElement.innerHTML = '';
    resultElement.textContent = '';

    const finalScore = (score / totalQuestions) * 100;
    totalQuestionsElement.textContent = totalQuestions;

    if (finalScore >= 80) {
        finalResultElement.textContent = 'Congratulations! You passed the quiz.';
        retryButton.style.display = 'none';
        homeButton.style.display = 'block';
    } else {
        finalResultElement.textContent = 'You did not pass the quiz. Please Try Again!.';
        retryButton.style.display = 'block';
        homeButton.style.display = 'none';
    }

    isQuizCompleted = true;
    resultSection.style.display = 'block';
}

// Function to retry the quiz
function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    isQuizCompleted = false;
    resultSection.style.display = 'none';
    displayQuestion();
}

// Function to return to the home page
function returnHome() {
    // First, navigate to the home page
    window.location.href = './index.html';
    
    // Then, you can show an alert or other messages if needed
    alert('Returning to the home page');
}

// Start the quiz by displaying the first question
displayQuestion();
