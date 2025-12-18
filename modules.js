// modules.js
const MODULES = [
  {
    id: 1,
    title: "Модуль 1: Самопознание",
    description: "Исследуйте себя сквозь линзы МАК",
    lessons: [
      {
        id: 1,
        title: "Самодиагностика",
        description: "Шесть перспектив на ваше «я»",
        questions: [
          { id: "m1_l1_q1", order: 1, text: "Как я себя вижу?", cardRequired: true },
          { id: "m1_l1_q2", order: 2, text: "Как я хочу себя видеть?", cardRequired: true },
          { id: "m1_l1_q3", order: 3, text: "Какова я на самом деле?", cardRequired: true },
          { id: "m1_l1_q4", order: 4, text: "Как меня видят другие?", cardRequired: true },
          { id: "m1_l1_q5", order: 5, text: "Каким(ой) они хотят меня видеть?", cardRequired: true },
          { id: "m1_l1_q6", order: 6, text: "Каким(ой) я могу и хочу быть настоящим(ей)?", cardRequired: true }
        ]
      },
      {
        id: 2,
        title: "Урок 2: Ценности",
        description: "Что важно?",
        questions: [
          { id: "m1_l2_q1", order: 1, text: "Что для меня ценно?", cardRequired: true }
        ]
      },
      {
        id: 3,
        title: "Урок 3",
        description: "",
        questions: []
      },
      {
        id: 4,
        title: "Урок 4",
        description: "",
        questions: []
      }
    ]
  },
  {
    id: 2,
    title: "Модуль 2",
    description: "Исследование",
    lessons: [
      { id: 1, title: "Урок 1", description: "", questions: [] },
      { id: 2, title: "Урок 2", description: "", questions: [] },
      { id: 3, title: "Урок 3", description: "", questions: [] },
      { id: 4, title: "Урок 4", description: "", questions: [] }
    ]
  },
  // модули 3–7 пока пустые
  { id: 3, title: "Модуль 3", description: "", lessons: [
    { id: 1, title: "Урок 1", description: "", questions: [] },
    { id: 2, title: "Урок 2", description: "", questions: [] },
    { id: 3, title: "Урок 3", description: "", questions: [] },
    { id: 4, title: "Урок 4", description: "", questions: [] }
  ]},
  { id: 4, title: "Модуль 4", description: "", lessons: [
    { id: 1, title: "Урок 1", description: "", questions: [] },
    { id: 2, title: "Урок 2", description: "", questions: [] },
    { id: 3, title: "Урок 3", description: "", questions: [] },
    { id: 4, title: "Урок 4", description: "", questions: [] }
  ]},
  { id: 5, title: "Модуль 5", description: "", lessons: [
    { id: 1, title: "Урок 1", description: "", questions: [] },
    { id: 2, title: "Урок 2", description: "", questions: [] },
    { id: 3, title: "Урок 3", description: "", questions: [] },
    { id: 4, title: "Урок 4", description: "", questions: [] }
  ]},
  { id: 6, title: "Модуль 6", description: "", lessons: [
    { id: 1, title: "Урок 1", description: "", questions: [] },
    { id: 2, title: "Урок 2", description: "", questions: [] },
    { id: 3, title: "Урок 3", description: "", questions: [] },
    { id: 4, title: "Урок 4", description: "", questions: [] }
  ]},
  { id: 7, title: "Модуль 7", description: "", lessons: [
    { id: 1, title: "Урок 1", description: "", questions: [] },
    { id: 2, title: "Урок 2", description: "", questions: [] },
    { id: 3, title: "Урок 3", description: "", questions: [] },
    { id: 4, title: "Урок 4", description: "", questions: [] }
  ]}
];
