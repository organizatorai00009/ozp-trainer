const scoreEl = document.getElementById('score-text');
const reviewZoneEl = document.getElementById('review-zone');
const userAnswers = JSON.parse(localStorage.getItem('ozp_user_answers')) || [];

function displayResults() {
  let correctCount = 0;
  quizQuestions.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === q.correctAnswer;
    if (isCorrect) correctCount++;
    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';
    let htmlContent = `<h4>Вопрос ${index + 1}: ${q.question}</h4>`;
    q.options.forEach((option, optIndex) => {
      let statusClass = '';
      if (optIndex === q.correctAnswer) {
        statusClass = 'correct';
      } else if (optIndex === userAnswer && !isCorrect) {
        statusClass = 'incorrect';
      }
      htmlContent += `<div class="option-card ${statusClass}">${option}</div>`;
    });
    reviewItem.innerHTML = htmlContent;
    reviewZoneEl.appendChild(reviewItem);
  });
  scoreEl.textContent = `${correctCount} из ${quizQuestions.length}`;
}

function restartQuiz() {
  localStorage.removeItem('ozp_user_answers');
  window.location.href = 'index.html';
}
displayResults();
