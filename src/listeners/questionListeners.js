'use strict';

import {  handleNextQuestion, hoverOnAnswers, modalHandler} from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  handleNextQuestion();
};
export const answerHover = () => {
 hoverOnAnswers();
};
export const modalEvent = () => {
  modalHandler();
}


 