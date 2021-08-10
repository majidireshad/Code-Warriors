'use strict';


import { handleNextQuestion ,handleCheckAnswer, handleGiveUpBtn, startQuiz, backToStart } from '../handlers/questionHandlers.js';


export const nextQuestion = () => {
  handleNextQuestion();
};
export const displayCorrectAnswer = () => {
  handleGiveUpBtn();
};
export const checkAnswer = (event) => {
  handleCheckAnswer(event.target);
};
export const startQuizClick = () => {
  startQuiz();
};
 export const restart = () => {
   backToStart();
 };