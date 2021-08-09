'use strict';


import { handleNextQuestion ,handleCheckAnswer, handleGiveupBtn, startQuiz, backToStart } from '../handlers/questionHandlers.js';


export const nextQuestion = () => {
  handleNextQuestion();
};
export const displayCorrectAnswer = () => {
  handleGiveupBtn();
};
export const checkAnswer = (event) => {
  handleCheckAnswer(event.target);
};
export const starQuizClick = () => {
  startQuiz();
};
 export const restart = () => {
   backToStart();
 };