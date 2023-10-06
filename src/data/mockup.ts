import {
  ELessonType,
  EOperation,
  ILessons,
  IListBadges,
  IQuiz,
} from "../types/utils";

export const lessons: ILessons = [
  {
    title: "Trên, dưới, phải, trái, trước, sau, ở giữa",
    video: "Qtm4ou2MMgw",
    type: ELessonType.OBJECTIVE_TEST,
    exams: [
      {
        imageSource: require("../../assets/quiz/poke.png"),
        question: "Pikachu đang ngồi ở bên nào so với cậu bé?",
        choices: ["Bên trái", "Bên phải", "Bên trên", "Bên dưới"],
        answer: 1,
      },
      {
        imageSource: require("../../assets/quiz/poke.png"),
        question: "Cậu bé đang ngồi ở đâu?",
        choices: [
          "Bên trái Pika",
          "Bên phải Pika",
          "Bên trên Celery",
          "Bên dưới chó",
        ],
        answer: 0,
      },
      {
        imageSource: require("../../assets/quiz/poke.png"),
        question: "Celery(con đang bay) đang như thế nào so với cậu bé",
        choices: ["Bên phải", "Bên dưới", "Bên trên", "Phía sau"],
        answer: 2,
      },
      {
        imageSource: require("../../assets/quiz/poke.png"),
        question: "Con chó đang như thế nào so với cái ghế",
        choices: ["Bên trên", "Bên phải", "Phía trước", "Bên dưới"],
        answer: 1,
      },
    ],
  },
  {
    title: "Hình vuông, hình tròn, hình tam giác, hình chữ nhật",
    video: "lcl8uB2AWM0",
    type: ELessonType.OBJECTIVE_TEST,
    exams: [
      {
        imageSource: require("../../assets/quiz/circle.png"),
        question: "Đây là hình gì?",
        choices: ["Hình vuông", "Hình tam giác", "Hình chữ nhật", "Hình tròn"],
        answer: 3,
      },
      {
        imageSource: require("../../assets/quiz/square.png"),
        question: "Đây là hình gì?",
        choices: ["Hình vuông", "Hình tam giác", "Hình chữ nhật", "Hình tròn"],
        answer: 0,
      },
    ],
  },
  {
    title: "Phép cộng trừ các số từ 0 đến 10",
    video: "MPizQADKkM8",
    type: ELessonType.PICK_NUMBER,
    exams: [
      {
        firstNum: 4,
        secondNum: 5,
        operation: EOperation.AddOperation,
        choices: [2, 3, 9],
        answer: 9,
      },
      {
        firstNum: 4,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [6, 4, 9],
        answer: 6,
      },
      {
        firstNum: 3,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [1, 5, 9],
        answer: 5,
      },
      {
        firstNum: 4,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [2, 6, 9],
        answer: 6,
      },
      {
        firstNum: 5,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [7, 2, 9],
        answer: 7,
      },
      {
        firstNum: 3,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [1, 3, 5],
        answer: 5,
      },
    ],
  },
  {
    title: "Các khối",
    video: "guNdJ5MtX1A",
    type: ELessonType.OBJECTIVE_TEST,
    exams: [
      {
        imageSource: require("../../assets/quiz/cau.jpeg"),
        question: "Đây là hình gì?",
        choices: [
          "Hình hộp chữ nhật",
          "Hình cầu",
          "Hình lăng trụ",
          "Hình lập phương",
        ],
        answer: 1,
      },
      {
        imageSource: require("../../assets/quiz/langtru.jpeg"),
        question: "Đây là hình gì?",
        choices: [
          "Hình hộp chữ nhật",
          "Hình cầu",
          "Hình lăng trụ",
          "Hình lập phương",
        ],
        answer: 2,
      },
    ],
  },
];

export const allBadges: IListBadges = {
  1: {
    image: require("../../assets/badges/badge-1.png"),
  },
  2: {
    image: require("../../assets/badges/badge-2.png"),
  },
  3: {
    image: require("../../assets/badges/badge-3.png"),
  },
  4: {
    image: require("../../assets/badges/badge-4.png"),
  },
  5: {
    image: require("../../assets/badges/badge-5.png"),
  },
  6: {
    image: require("../../assets/badges/badge-6.png"),
  },
  7: {
    image: require("../../assets/badges/badge-7.png"),
  },
  8: {
    image: require("../../assets/badges/badge-8.png"),
  },
};

export const quizAddAndSubtract: { [key: string]: IQuiz[] } = {
  [EOperation.AddOperation]: [
    {
      firstNum: 4,
      secondNum: 5,
      operation: EOperation.AddOperation,
      choices: [2, 3, 9],
      answer: 2,
    },
    {
      firstNum: 4,
      secondNum: 2,
      operation: EOperation.AddOperation,
      choices: [2, 6, 9],
      answer: 1,
    },
    {
      firstNum: 3,
      secondNum: 2,
      operation: EOperation.AddOperation,
      choices: [1, 5, 9],
      answer: 1,
    },
    {
      firstNum: 4,
      secondNum: 3,
      operation: EOperation.AddOperation,
      choices: [2, 6, 7],
      answer: 2,
    },
  ],
  [EOperation.SubtractOperation]: [
    {
      firstNum: 10,
      secondNum: 5,
      operation: EOperation.SubtractOperation,
      choices: [5, 2, 3],
      answer: 0,
    },
    {
      firstNum: 4,
      secondNum: 1,
      operation: EOperation.SubtractOperation,
      choices: [2, 3, 9],
      answer: 1,
    },
    {
      firstNum: 9,
      secondNum: 2,
      operation: EOperation.SubtractOperation,
      choices: [7, 5, 9],
      answer: 0,
    },
    {
      firstNum: 4,
      secondNum: 3,
      operation: EOperation.SubtractOperation,
      choices: [2, 5, 1],
      answer: 2,
    },
  ],
};
