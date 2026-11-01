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
  }, 
    {
    id: 11,
    category: "methodology",
    section: "Pedagogy",
    question: "According to Bloom's Taxonomy, which action verb is associated with the highest level of cognitive thinking skills?",
    options: ["Identify", "Analyze", "Create", "Summarize"],
    correctAnswerHash: "Mg==", // Зашифрованный индекс 2 (Create)
    explanation: "Правильный ответ: 'Create' (Создание). В обновленной таксономии Блума уровень 'Create' является наивысшей ступенью когнитивных навыков (навыки высокого порядка / HOTS), в то время как 'Identify' — самым базовым."
  },
  {
    id: 12,
    category: "methodology",
    section: "Assessment",
    question: "In the context of the updated educational curriculum in Kazakhstan, 'descriptors' are primarily used to:",
    options: [
      "Compare students' total marks with national statistical averages.",
      "Provide specific, step-by-step criteria for measuring a student's performance in formative and summative tasks.",
      "Select advanced students for republican olympiads.",
      "Punish students for minor academic behavioral disruptions."
    ],
    correctAnswerHash: "MQ==", // Зашифрованный индекс 1
    explanation: "Правильный ответ: 'Provide specific, step-by-step criteria...'. Дескрипторы в критериальном оценивании РК описывают конкретные шаги выполнения задания, помогая объективно выставить баллы за СОР или СОЧ."
  },
  {
    id: 13,
    category: "methodology",
    section: "CLIL",
    question: "What does the 'Dual-focused' nature of Content and Language Integrated Learning (CLIL) imply?",
    options: [
      "Teaching two foreign languages simultaneously in the same classroom.",
      "Equal emphasis on learning the subject content and the target modern language.",
      "Focusing on both reading comprehension and listening skills equally.",
      "Separating native tongue instruction from grammar drilling sessions."
    ],
    correctAnswerHash: "MQ==", // Зашифрованный индекс 1
    explanation: "Правильный ответ: 'Equal emphasis on learning the subject content and the target language'. Метод CLIL подразумевает одновременное изучение неязыкового предмета (например, биологии или истории) и иностранного языка."
  },
  {
    id: 14,
    category: "subject",
    section: "Vocabulary",
    question: "Choose the correct word to complete the idiom: 'The newly appointed director decided to clear the ________ and start the project from scratch.'",
    options: ["air", "decks", "table", "ground"],
    correctAnswerHash: "MQ==", // Зашифрованный индекс 1 (decks)
    explanation: "Правильный ответ: 'decks'. Идиома 'clear the decks' означает 'подготовиться к решительным действиям, убрать все лишнее перед началом важной работы'."
  },
  {
    id: 15,
    category: "subject",
    section: "Grammar",
    question: "Identify the sentence that uses a causative structure correctly:",
    options: [
      "The English teacher made the students to write an essay.",
      "The English teacher had the students write an essay.",
      "The English teacher got the students write an essay.",
      "The English teacher made the students written an essay."
    ],
    correctAnswerHash: "MQ==", // Зашифрованный индекс 1
    explanation: "Правильный ответ: 'The English teacher had the students write an essay.' В каузативной форме с глаголом 'have' используется голый инфинитив (Bare Infinitive). С глаголом 'make' частица 'to' также не ставится, поэтому первый вариант неверен."
  },
  {
    id: 16,
    category: "methodology",
    section: "Classroom Management",
    question: "Which strategy is most effective for promoting inclusivity in a mixed-ability English language classroom?",
    options: [
      "Focusing questions exclusively on high-achieving students to keep the lesson pace fast.",
      "Providing tiered (differentiated) tasks that accommodate different readiness levels.",
      "Grouping all lower-achieving students together for the entire academic year.",
      "Using the exact same complex instructional materials for every student without changes."
    ],
    correctAnswerHash: "MQ==", // Зашифрованный индекс 1
    explanation: "Правильный ответ: 'Providing tiered (differentiated) tasks...'. Дифференциация (differentiation) — ключевое требование инклюзивности. Задания разного уровня сложности позволяют вовлечь всех учащихся."
  },
  {
    id: 17,
    category: "subject",
    section: "Grammar",
    question: "If it ________ for your timely advice last week, I would not be working as a senior lecturer today.",
    options: ["weren't", "hadn't been", "hasn't been", "isn't"],
    correctAnswerHash: "MQ==", // Зашифрованный индекс 1
    explanation: "Правильный ответ: 'hadn't been'. Это смешанный тип условного предложения (Mixed Conditional). Условие относится к ПРОШЛОМУ (last week — Past Perfect), а следствие — к НАСТОЯЩЕМУ (today — would + verb)."
  }
№]; 
