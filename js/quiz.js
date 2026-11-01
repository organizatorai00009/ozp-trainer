function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledDb = shuffleArray([...quizQuestions]);
const currentQuizQuestions = shuffledDb.slice(0, 10);

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const currentQuestionNumElement = document.getElementById("current-question-num");
const totalQuestionsElement = document.getElementById("total-questions");

function loadQuestion() {
  const currentQuestion = currentQuizQuestions[currentQuestionIndex];
  
  if (currentQuestionNumElement) currentQuestionNumElement.textContent = currentQuestionIndex + 1;
  if (totalQuestionsElement) totalQuestionsElement.textContent = currentQuizQuestions.length;
  
  questionElement.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectOption(index, button));
    optionsContainer.appendChild(button);
  });

  nextButton.style.display = "none";
}

function selectOption(selectedIndex, selectedButton) {
  const oldSelected = optionsContainer.querySelector(".option-btn.selected");
  if (oldSelected) {
    oldSelected.classList.remove("selected");
  }

  selectedButton.classList.add("selected");
  userAnswers[currentQuestionIndex] = selectedIndex;
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  const currentQuestion = currentQuizQuestions[currentQuestionIndex];
  const selectedIndex = userAnswers[currentQuestionIndex];
  const correctAnswerIndex = parseInt(atob(currentQuestion.correctAnswerHash), 10);

  if (selectedIndex === correctAnswerIndex) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuizQuestions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("quizScore", score);
    localStorage.setItem("totalQuestions", currentQuizQuestions.length);
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    localStorage.setItem("quizQuestionsRun", JSON.stringify(currentQuizQuestions));
    window.location.href = "results.html";
  }
});

loadQuestion();
