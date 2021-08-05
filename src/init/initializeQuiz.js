'use strict';

import { QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID } from '../constants.js';
import { showCurrentQuestion } from '../handlers/questionHandlers.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { createHiddenElement, createNextQuestionButtonElement, createSurrenderButtonElement } from '../views/questionViews.js';
import { quizData } from '../data.js';
import { createLastQuestionButtonElement } from '../views/questionViews.js'

const initializeQuiz = () => {
setupQuizHTML();

quizData.currentQuestionIndex = 0;

showCurrentQuestion();
};

const setupQuizHTML = () => {
const userInterfaceContainer = getDOMElement('user-interface');
const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
const questionContainer = createDOMElement('div', {
  id: QUESTION_CONTAINER_ID,
});

quizContainer.appendChild(questionContainer);
  
  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);
  const surrenderButton = createSurrenderButtonElement();
  quizContainer.appendChild(surrenderButton);
  const hiddenModalBox = createHiddenElement();
  quizContainer.appendChild(hiddenModalBox);
  userInterfaceContainer.appendChild(quizContainer);

const lastQuestionButton = createLastQuestionButtonElement();
quizContainer.appendChild(lastQuestionButton);

userInterfaceContainer.appendChild(quizContainer);

};

window.addEventListener('load', initializeQuiz);
