let currentQuestionIndex = 0;
let userAnswers = [];
const categoryEl = document.getElementById('question-category');
const questionEl = document.getElementById('question-text');
const optionsEl = document.getElementById('options-box');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  categoryEl.textContent = `Категория: ${currentQuestion.category}`;
  questionEl.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  optionsEl.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.textContent = option;
    card.onclick = () => selectOption(index, card);
    optionsEl.appendChild(card);
  });
  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.textContent = "Завершить тест";
  } else {
    nextBtn.textContent = "Следующий вопрос";
  }
}

let selectedAnswerIndex = null;
function selectOption(index, cardElement) {
  selectedAnswerIndex = index;
  document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
  cardElement.classList.add('selected');
}

function submitAnswer() {
  if (selectedAnswerIndex === null) {
    alert("Пожалуйста, выберите один из вариантов ответа!");
    return;
  }
  userAnswers.push(selectedAnswerIndex);
  selectedAnswerIndex = null;
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    localStorage.setItem('ozp_user_answers', JSON.stringify(userAnswers));
    window.location.href = 'results.html';
  }
}
loadQuestion();
