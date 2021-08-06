'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { nextQuestion , checkAnswer} from '../listeners/questionListeners.js';
import { createDOMElement } from '../utils/DOMUtils.js';

/**
 * Create an Answer element
 */

export const createAnswerElement = (answerText) => {
 
  for (const [key, value] of Object.entries(answerText.answers)) {
    const answerElement = createDOMElement('li');
    answerElement.innerText = value;
    answerElement.style.cursor = "pointer";
    answerElement.setAttribute('class', 'answer');
    answerElement.setAttribute('data-choose', key);
  }
 
  return answerElement;
};

/**
 * Create a full question element
 */
export const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  const title = createDOMElement('h1');
  title.innerText = question.text;
  container.appendChild(title);

  const answerContainer = createDOMElement('ol');

  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey]);
    answerContainer.appendChild(answer);
  }


  container.appendChild(answerContainer);

  return container;
};



/**
 * Creates and returns the next questions button
 */
export const createNextQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: NEXT_QUESTION_BUTTON_ID,
  });

  buttonElement.innerText = 'Next question';
  buttonElement.addEventListener('click', nextQuestion);

  return buttonElement;
};

