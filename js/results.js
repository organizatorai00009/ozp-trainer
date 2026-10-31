// Элементы интерфейса
const scoreEl = document.getElementById('score-text');
const reviewZoneEl = document.getElementById('review-zone');

// Загружаем сохраненные ответы текущей сессии из localStorage
const userAnswers = JSON.parse(localStorage.getItem('ozp_user_answers')) || [];

function displayResults() {
  let correctCount = 0;
  reviewZoneEl.innerHTML = ''; // Очищаем зону перед выводом

  if (userAnswers.length === 0) {
    scoreEl.textContent = "Данные теста не найдены. Пожалуйста, пройдите тест заново.";
    return;
  }

  // Перебираем сохраненные ответы пользователя
  userAnswers.forEach((ans, index) => {
    if (ans.isCorrect) {
      correctCount++;
    }

    // Создаем блок для разбора текущего вопроса
    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';

    // Формируем заголовок вопроса с номером и указанием категории
    const categoryName = ans.category === "subject" ? "Знание языка" : "Методика преподавания";
    let htmlContent = `
      <div class="question-header">
        <h4>Вопрос ${index + 1} <span class="category-badge">(${categoryName})</span></h4>
        <p class="question-text-style">${ans.questionText}</p>
      </div>
    `;

    // Выводим варианты ответов с подсветкой ошибок
    ans.options.forEach((option, optIndex) => {
      let statusClass = '';

      // Подсвечиваем зеленым ПРАВИЛЬНЫЙ ответ экзамена
      if (optIndex === ans.correctAnswerIndex) {
        statusClass = 'correct';
      } 
      // Подсвечиваем красным НЕПРАВИЛЬНЫЙ ответ, если его выбрал учитель
      else if (optIndex === ans.userAnswerIndex && !ans.isCorrect) {
        statusClass = 'incorrect';
      }

      // Метка для наглядности (что выбрал пользователь)
      let userChoiceMarker = (optIndex === ans.userAnswerIndex) ? ' <span>(Ваш выбор)</span>' : '';

      htmlContent += `<div class="option-card ${statusClass}">${option}${userChoiceMarker}</div>`;
    });

    // ДОБАВЛЯЕМ ОБЪЯСНЕНИЕ ОШИБКИ (Киллер-фича тренажера)
    // Текст подсказки будет выводиться всегда, помогая учителю учиться на ошибках
    htmlContent += `
      <div class="explanation-box">
        <strong>Разбор задания:</strong> ${ans.explanation || "Объяснение к этому вопросу подготавливается."}
      </div>
    `;

    reviewItem.innerHTML = htmlContent;
    reviewZoneEl.appendChild(reviewItem);
  });

  // Выводим общий итоговый балл
  scoreEl.textContent = `${correctCount} из ${userAnswers.length}`;

  // Вызываем функцию отрисовки истории 5 последних попыток
  displayHistory();
}

// --- ФУНКЦИЯ ВЫВОДА 5 ПОСЛЕДНИХ ПОПЫТОК ---
function displayHistory() {
  // Находим контейнер истории на странице результатов (создаем динамически, если его нет в HTML)
  let historyList = document.getElementById('history-list');
  
  if (!historyList) {
    const historyContainer = document.createElement('div');
    historyContainer.className = 'history-container';
    historyContainer.innerHTML = `
      <h3>История ваших последних попыток (ОЗП):</h3>
      <ul id="history-list"></ul>
    `;
    // Вставляем блок истории в самый конец страницы результатов
    document.body.appendChild(historyContainer);
    historyList = document.getElementById('history-list');
  }

  const history = JSON.parse(localStorage.getItem('ozp_history')) || [];

  if (history.length === 0) {
    historyList.innerHTML = '<li>Вы еще не проходили тест.</li>';
    return;
  }

  // Заполняем список попытками
  historyList.innerHTML = history.map((attempt) => `
    <li class="history-item">
      <span class="attempt-date">${attempt.date}</span> — 
      <strong class="attempt-score">${attempt.score} из ${attempt.total}</strong> 
      (${attempt.percentage}%)
    </li>
  `).join('');
}

// Функция перезапуска теста
function restartQuiz() {
  localStorage.removeItem('ozp_user_answers'); // Очищаем текущую сессию
  window.location.href = 'index.html'; // Возвращаем на главную страницу
}

// Привязываем функцию перезапуска к вашей кнопке (убедитесь, что у кнопки в HTML прописан id="restart-btn" или onclick="restartQuiz()")
const restartBtn = document.getElementById('restart-btn');
if (restartBtn) {
  restartBtn.onclick = restartQuiz;
}

// Запускаем расчет и отображение результатов при загрузке страницы
displayResults();
