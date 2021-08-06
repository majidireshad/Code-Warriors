'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';
import { checkAnswer } from '../questionListeners.js'

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
};

export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  showCurrentQuestion();
};

export const handleCheckAnswer = (selectedAnswer) => {
const oneTimeSelection = selectedAnswer;
const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
let clickedAnswer = oneTimeSelection.getAttribute('data-choose');
data.currentQuestionIndex.selected = clickedAnswer;
currentQuestion.answers.forEach((answer) => {
  answer.style.pointerEvents = 'none';
});
if(clickedAnswer === currentCorrectAnswer){
  oneTimeSelection.style.pointerEvents = 'none';
  oneTimeSelection.classList.add('correct-answer');
  quizData.correctAnswersCounter++;
} else {
  oneTimeSelection.classList.add('wrong-answer');
  correctAnswer.classList.add('correct-answer');
}

document.getElementById(
  'corrects'
).innerText = `${quizData.correctAnswersCounter} Correct of 10`;
}

