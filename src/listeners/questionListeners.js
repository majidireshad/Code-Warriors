'use strict';

import { handleNextQuestion ,handleCheckAnswer, handleGiveupBtn} from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  handleNextQuestion();
};
export const displayCorrectAnswer = () => {
  handleGiveupBtn();
};
export const checkAnswer = (event) => {
  handleCheckAnswer(event.target);
};