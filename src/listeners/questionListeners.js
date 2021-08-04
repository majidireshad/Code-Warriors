'use strict';

import {  handleNextQuestion, hoverOnAnswers} from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  handleNextQuestion();
};
export const answerHover = () => {
 hoverOnAnswers();
};


 