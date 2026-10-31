// Переменные для отслеживания состояния теста
let currentQuestionIndex = 0;
let userAnswers = [];
let selectedAnswerIndex = null;

// Элементы интерфейса (DOM-элементы)
const categoryEl = document.getElementById('question-category');
const questionEl = document.getElementById('question-text');
const optionsEl = document.getElementById('options-box');
const nextBtn = document.getElementById('next-btn');

// --- 1. АЛГОРИТМ ТАСОВАНИЯ ФИШЕРА-ЙЕТСА ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- 2. ГЕНЕРАЦИЯ СЛУЧАЙНОГО ВАРИАНТА ТЕСТА ---
function generateExam(questionsPool) {
  // Разделяем общую базу на две категории ОЗП
  const subjectQuestions = questionsPool.filter(q => q.category === "subject");
  const methodologyQuestions = questionsPool.filter(q => q.category === "methodology");

  // Перемешиваем каждую категорию отдельно
  const shuffledSubjects = shuffleArray([...subjectQuestions]);
  const shuffledMethodology = shuffleArray([...methodologyQuestions]);

  // Выбираем нужное количество (пока вопросов мало, берем всё, что есть)
  // Когда база увеличится до 100+ вопросов, здесь автоматически будут выбираться случайные 30 и 20
  const selectedSubjects = shuffledSubjects.slice(0, 30);
  const selectedMethodology = shuffledMethodology.slice(0, 20);

  // Объединяем их и еще раз перемешиваем, чтобы предмет и методика шли вразброс
  return shuffleArray([...selectedSubjects, ...selectedMethodology]);
}

// Создаем уникальный вариант теста для этой сессии
const currentExamQuestions = generateExam(quizQuestions);

// --- 3. ФУНКЦИЯ ОТОБРАЖЕНИЯ ВОПРОСА ---
function loadQuestion() {
  const currentQuestion = currentExamQuestions[currentQuestionIndex];
  
  // Красивое отображение категории на русском языке
  const categoryName = currentQuestion.category === "subject" ? "Знание языка" : "Методика преподавания";
  categoryEl.textContent = `Категория: ${categoryName}`;
  
  questionEl.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  optionsEl.innerHTML = '';
  
  currentQuestion.options.forEach((option, index) => {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.textContent = option;
    card.onclick = () => selectOption(index, card);
    optionsEl.appendChild(card);
  });
  
  // Меняем текст кнопки на последнем вопросе
  if (currentQuestionIndex === currentExamQuestions.length - 1) {
    nextBtn.textContent = "Завершить тест";
  } else {
    nextBtn.textContent = "Следующий вопрос";
  }
}

// --- 4. ВЫБОР ВАРИАНТА ОТВЕТА УЧИТЕЛЕМ ---
function selectOption(index, cardElement) {
  selectedAnswerIndex = index;
  document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
  cardElement.classList.add('selected');
}

// --- 5. ОБРАБОТКА НАЖАТИЯ НА КНОПКУ ДАЛЕЕ / ПРОВЕРИТЬ ---
function submitAnswer() {
  if (selectedAnswerIndex === null) {
    alert("Пожалуйста, выберите один из вариантов ответа!");
    return;
  }
  
  const currentQuestion = currentExamQuestions[currentQuestionIndex];
  
  // Расшифровываем правильный ответ из Base64 прямо во время проверки
  const correctAnswerIndex = parseInt(atob(currentQuestion.correctAnswerHash), 10);
  const isCorrect = selectedAnswerIndex === correctAnswerIndex;
  
  // Сохраняем подробные данные ответа для страницы результатов
  userAnswers.push({
    questionId: currentQuestion.id,
    questionText: currentQuestion.question,
    options: currentQuestion.options,
    userAnswerIndex: selectedAnswerIndex,
    correctAnswerIndex: correctAnswerIndex,
    isCorrect: isCorrect,
    explanation: currentQuestion.explanation,
    category: currentQuestion.category
  });
  
  selectedAnswerIndex = null;
  currentQuestionIndex++;
  
  if (currentQuestionIndex < currentExamQuestions.length) {
    loadQuestion();
  } else {
    // Если тест закончен, считаем общий балл
    const totalScore = userAnswers.filter(ans => ans.isCorrect).length;
    
    // Сохраняем в localStorage ответы и отправляем балл в историю
    localStorage.setItem('ozp_user_answers', JSON.stringify(userAnswers));
    saveResultToHistory(totalScore, currentExamQuestions.length);
    
    // Перенаправляем на страницу результатов
    window.location.href = 'results.html';
  }
}

// --- 6. ФУНКЦИЯ СОХРАНЕНИЯ 5 ПОСЛЕДНИХ ПОПЫТОК В БРАУЗЕРЕ ---
function saveResultToHistory(score, totalQuestions) {
  let history = JSON.parse(localStorage.getItem('ozp_history')) || [];
  
  const newAttempt = {
    date: new Date().toLocaleDateString('ru-RU', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    }),
    score: score,
    total: totalQuestions,
    percentage: Math.round((score / totalQuestions) * 100)
  };
  
  // Добавляем новую попытку в начало списка
  history.unshift(newAttempt);
  
  // Оставляем только 5 последних записей
  if (history.length > 5) {
    history = history.slice(0, 5);
  }
  
  localStorage.setItem('ozp_history', JSON.stringify(history));
}

// Запуск теста при загрузке страницы
loadQuestion();

