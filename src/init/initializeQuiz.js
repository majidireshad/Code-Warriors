'use strict';

import { QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID, PAGE_TITLE } from '../constants.js';
import { showCurrentQuestion } from '../handlers/questionHandlers.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { createNextQuestionButtonElement, createGiveUpButtonElement, createStartQuizBtn} from '../views/questionViews.js';
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
const startQuizContainer = getDOMElement('start-container');
const pageTitle = getDOMElement (PAGE_TITLE)

quizContainer.appendChild(questionContainer);

const startBtn = createStartQuizBtn();
startQuizContainer.appendChild(startBtn);

const nextQuestionButton = createNextQuestionButtonElement();
quizContainer.appendChild(nextQuestionButton);

const give_upButton = createGiveUpButtonElement();
quizContainer.appendChild(give_upButton);

const lastQuestionButton = createLastQuestionButtonElement();
quizContainer.appendChild(lastQuestionButton);

userInterfaceContainer.appendChild(quizContainer);
};

window.addEventListener('load', initializeQuiz);
