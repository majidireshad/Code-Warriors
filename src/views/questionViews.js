'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import {answerHover, nextQuestion} from '../listeners/questionListeners.js';
import { createDOMElement } from '../utils/DOMUtils.js';

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText) => {
  const answerElement = createDOMElement('li');
  answerElement.setAttribute("class", "selected-answer")
  answerElement.innerText = answerText;
  answerElement.addEventListener('mouseover', answerHover);
  answerElement.addEventListener('click', nextQuestion);

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
  answerContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI'){
      alert(e.target.innerText); 
    }
});
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
