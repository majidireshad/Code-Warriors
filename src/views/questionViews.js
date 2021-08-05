'use strict';

import { NEXT_QUESTION_BUTTON_ID, SURRENDER_BUTTON_ID, HIDDEN_MODAL_ID} from '../constants.js';
import { isCorrect, modalHandler, resources } from '../handlers/questionHandlers.js';
import {answerHover, modalEvent, nextQuestion} from '../listeners/questionListeners.js';
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

 /**
 * Creates and returns the restart test button
 */

export const createLastQuestionButtonElement = () => {
  const buttonLastElement = createDOMElement('button', {
    id: LAST_QUESTION_BUTTON_ID,
  });

 
  buttonLastElement.innerText = 'Restart Test';
  buttonLastElement.addEventListener('click', nextQuestion);
  return buttonLastElement;
};

//Create button to see the answer 
export const createSurrenderButtonElement = () => {
  const surrenderButtonElement = createDOMElement('button', {
    id:SURRENDER_BUTTON_ID
  });
  surrenderButtonElement.innerText = 'Show me the way!';

  return surrenderButtonElement;
};
//Create a hidden modal box 
export const createHiddenElement = () => {
  const modalBox = createDOMElement('div', {id:HIDDEN_MODAL_ID,});
  modalBox.setAttribute('class', 'modal');
  const modalElement = createDOMElement('div');
  modalElement.setAttribute('class', 'modalcontent')
  modalBox.appendChild(modalElement);
  const xButton = createDOMElement('span');
  xButton.setAttribute('class', 'close');
  xButton.innerText = 'X';
  modalElement.innerText = `This is the way: The correct answer is ${isCorrect()}`, `Here are the facts : ${resources()}`;
  modalElement.appendChild(xButton);

return modalBox;
};

