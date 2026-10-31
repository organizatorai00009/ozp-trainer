const quizQuestions = [
  {
    id: 1,
    category: "methodology",
    question: "Which teaching approach focuses on communicative competence rather than mere grammatical correctness?",
    options: ["Grammar-Translation Method", "Communicative Language Teaching (CLT)", "The Audio-Lingual Method", "Total Physical Response (TPR)"],
    correctAnswerHash: "MQ==", // Зашифрованный индекс 1
    explanation: "Правильный ответ: 'Communicative Language Teaching (CLT)'. Этот подход ставит главной целью развитие способности реально общаться на языке, а не просто зазубривать грамматические правила."
  },
  {
    id: 2,
    category: "subject",
    question: "Identify the correct sentence structure for the Third Conditional:",
    options: ["If + Past Simple, would + verb", "If + Present Simple, will + verb", "If + Past Perfect, would have + Past Participle", "If + Past Continuous, would + verb"],
    correctAnswerHash: "Mg==", // Зашифрованный индекс 2
    explanation: "Правильный ответ: 'If + Past Perfect, would have + Past Participle'. Третий тип условных предложений (Third Conditional) используется для выражения нереальных действий в прошлом."
  },
  {
    id: 3,
    category: "methodology",
    question: "What is the primary purpose of Formative Assessment?",
    options: ["To assign a final grade at the end of the term", "To monitor student learning and provide ongoing feedback", "To compare student performance against a national standard", "To placement test students into levels"],
    correctAnswerHash: "MQ==", // Зашифрованный индекс 1
    explanation: "Правильный ответ: 'To monitor student learning and provide ongoing feedback'. Формативное оценивание — это текущее наблюдение за прогрессом учеников для своевременной корректировки обучения."
  },
  {
    id: 4,
    category: "subject",
    question: "Select the sentence that demonstrates the correct use of inversion for emphasis:",
    options: ["Rarely I have seen such a beautiful performance.", "Rarely have I seen such a beautiful performance.", "Rarely I had seen such a beautiful performance.", "Rarely did I saw such a beautiful performance."],
    correctAnswerHash: "MQ==", // Зашифрованный индекс 1
    explanation: "Правильный ответ: 'Rarely have I seen...'. При использовании отрицательных наречий (Rarely, Seldom, Never) в начале предложения происходит инверсия — вспомогательный глагол выносится перед подлежащим."
  },
  {
    id: 5,
    category: "subject",
    question: "By the time the new curriculum is implemented next year, the teachers ________ training for six months.",
    options: ["will undergo", "will be undergoing", "will have been undergoing", "would undergo"],
    correctAnswerHash: "Mg==", // Зашифрованный индекс 2
    explanation: "Правильный ответ: 'will have been undergoing'. Здесь требуется время Future Perfect Continuous, так как указана продолжительность действия (for six months) к определенному моменту в будущем (by the time next year)."
  },
  {
    id: 6,
    category: "subject",
    question: "The headmaster suggested that the grading criteria ________ reviewed immediately.",
    options: ["is", "was", "be", "are"],
    correctAnswerHash: "Mg==", // Зашифрованный индекс 2
    explanation: "Правильный ответ: 'be'. После глаголов рекомендации и требования (suggest, insist, recommend, demand) в придаточном предложении используется Present Subjunctive (сослагательное наклонение), где глагол 'to be' всегда пишется как 'be' независимо от лица."
  },
  {
    id: 7,
    category: "subject",
    question: "I would rather you ________ to the coordinator about the exam results yesterday.",
    options: ["spoke", "have spoken", "had spoken", "would speak"],
    correctAnswerHash: "Mg==", // Зашифрованный индекс 2
    explanation: "Правильный ответ: 'had spoken'. Конструкция 'I would rather you...' для выражения нереального желания, относящегося к ПРОШЛОМУ (yesterday), требует использования времени Past Perfect."
  },
  {
    id: 8,
    category: "subject",
    question: "The teacher was highly proficient ________ managing mixed-ability classes.",
    options: ["at", "in", "with", "for"],
    correctAnswerHash: "MQ==", // Зашифрованный индекс 1
    explanation: "Правильный ответ: 'in'. Прилагательное 'proficient' (опытный, умелый) требует после себя использования устойчивого предлога 'in' (proficient in something)."
  },
  {
    id: 9,
    category: "subject",
    question: "Choose the correct phrase to complete the collocated expression: 'The school needs to ________ account for the individual needs of students.'",
    options: ["take into", "give into", "bring to", "make up"],
    correctAnswerHash: "MA==", // Зашифрованный индекс 0
    explanation: "Правильный ответ: 'take into'. Устойчивое выражение (collocation) 'take into account' переводится как 'принимать во внимание / учитывать'."
  },
  {
    id: 10,
    category: "subject",
    question: "No sooner ________ the classroom than the students stopped talking.",
    options: ["had the inspector entered", "the inspector entered", "did the inspector entered", "has the inspector entered"],
    correctAnswerHash: "MA==", // Зашифрованный индекс 0
    explanation: "Правильный ответ: 'had the inspector entered'. Конструкция 'No sooner ... than' требует использования инверсии и времени Past Perfect в первой части предложения."
  }
];
