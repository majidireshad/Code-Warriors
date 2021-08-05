  'use strict';

import { HIDDEN_MODAL_ID, QUESTION_CONTAINER_ID, SURRENDER_BUTTON_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import {clearDOMElement, createDOMElement, getDOMElement} from '../utils/DOMUtils.js';
import { quizData } from '../data.js';
import {LAST_QUESTION_BUTTON_ID, NEXT_QUESTION_BUTTON_ID} from '../constants.js';


  export const showCurrentQuestion = () => {
    
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);

  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
  if (quizIsEnded() === true) {
    const nextQuestionBtn = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    const lastQuestionBtn = getDOMElement(LAST_QUESTION_BUTTON_ID);
    nextQuestionBtn.style.visibility = 'hidden';
    lastQuestionBtn.style.visibility = 'visible';
  } else {
    restartBtnSetup();
  };
  }

  const {questions} = quizData;
  const lengthOfArray = questions.length - 1;


  export const handleNextQuestion = () => {
  if (quizIsEnded() === true) {
    quizData.currentQuestionIndex = 0;
    const nextQuestionBtn = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    const lastQuestionBtn = getDOMElement(LAST_QUESTION_BUTTON_ID);
    nextQuestionBtn.style.visibility = 'hidden';
    lastQuestionBtn.style.visibility = 'visible';
  } else {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  };
  showCurrentQuestion();

};
//correct answer

export const isCorrect = () => {
  const reviewAnswer = quizData.questions;
  const correctAnswer = reviewAnswer.filter(element => {element.answers === element.correct});
  return correctAnswer;
}

// provide resources for further studies 

export const resources = () => {
  const resource = quizData.questions;
  const getResource = resource.filter(e => {e.links});
  return getResource;
};

//create modal handler: source https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal 

export const modalHandler = () => {
  const modal = document.getElementById(HIDDEN_MODAL_ID);
  const btn = document.getElementById(SURRENDER_BUTTON_ID);
  const span = document.getElementsByClassName('close');
  btn.onclick =() => {
    modal.style.display = "block";
  }
  span.onclick = () => {
    modal.style.display = "none";
  }
  window.onclick = (event)=> {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  return btn, span, modal;
};

export const hoverOnAnswers = ()=> {
  const selectItems = document.getElementsByClassName('selected-answer');
    for (let i = 0; i < selectItems.length; i++) 
        selectItems[i].style.cursor = "pointer";
    }
}; 

  };

  export const quizIsEnded = () => {
  return quizData.currentQuestionIndex >= lengthOfArray;
  };

/**
 * The restartBtnSetup function resets the buttons when the test is restarted.
 */
  const restartBtnSetup = () => {
    const nextQuestionBtn = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    const lastQuestionBtn = getDOMElement(LAST_QUESTION_BUTTON_ID);
    nextQuestionBtn.style.visibility = 'visible';
    lastQuestionBtn.style.visibility = 'hidden';
  };
