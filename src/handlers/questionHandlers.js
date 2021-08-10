'use strict';

import {QUESTION_CONTAINER_ID, ANSWER_CONTAINER_ID, QUIZ_CONTAINER_ID, START_QUIZ_BUTTON_ID, PAGE_TITLE} from '../constants.js';
import {createQuestionElement, createQuizResultElement} from '../views/questionViews.js';
import {clearDOMElement, getDOMElement} from '../utils/DOMUtils.js';
import {quizData} from '../data.js';
import {LAST_QUESTION_BUTTON_ID, NEXT_QUESTION_BUTTON_ID, GIVE_UP_BUTTON_ID} from '../constants.js';


export const showCurrentQuestion = () => {
    if(quizIsEnded()) {
        showResultPage();
    } else {
        const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

        const questionDOM = createQuestionElement(currentQuestion);
        const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);

        clearDOMElement(questionContainer);
        questionContainer.appendChild(questionDOM);
        if (quizData.currentQuestionIndex === 0) {
            restartQuizSetup();
        }
    }
};

const {questions} = quizData;

const lengthOfArray = questions.length;

export const handleNextQuestion = () => {
    if (quizIsEnded() === true) {
        quizData.currentQuestionIndex = 0;
    } else {
        quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    }
    showCurrentQuestion();
};

// giveUp function 
export const handleGiveUpBtn = () => {
  let correctAnswerElement = getDOMElement(quizData.questions[quizData.currentQuestionIndex].correct);
  correctAnswerElement.classList.add('correct-answer');
  const answerElement = getDOMElement(ANSWER_CONTAINER_ID);
    answerElement.style.pointerEvents = "none";
};

export const handleCheckAnswer = (selectedAnswer) => {
    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    let clickedAnswer = selectedAnswer.innerText;
    let currentCorrectAnswer = currentQuestion.answers[currentQuestion.correct];


    if (clickedAnswer === currentCorrectAnswer) {
        selectedAnswer.classList.add('correct-answer');
        quizData.correctAnswersCounter = quizData.correctAnswersCounter + 1;
    } else {
        selectedAnswer.classList.add('wrong-answer');
        let correctAnswerElement = getDOMElement(currentQuestion.correct);
        correctAnswerElement.classList.add('correct-answer');
    }

    document.getElementById(
        'corrects'
    ).innerText = `${quizData.correctAnswersCounter} Correct of ${lengthOfArray}`;

    const answerElement = getDOMElement(ANSWER_CONTAINER_ID);
    answerElement.style.pointerEvents = "none";
};

export const quizIsEnded = () => {
    return quizData.currentQuestionIndex >= lengthOfArray;
};

/**
 * The restartBtnSetup function resets the buttons when the test is restarted.
 */
export const startQuiz = () => {
    const startQuizBtn = getDOMElement(START_QUIZ_BUTTON_ID);
    const displayQuiz = getDOMElement(QUIZ_CONTAINER_ID);
    const displayStartContainer = document.getElementById("start-container");
    const titleDisplay = getDOMElement(PAGE_TITLE);
    titleDisplay.innerText = 'Code Warriors';
    displayStartContainer.style.display = 'none';
    startQuizBtn.style.visibility = 'hidden';
    displayQuiz.style.display = 'flex';

};  
const restartQuizSetup = () => {
    
    const nextQuestionBtn = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    const giveUpBtn = getDOMElement(GIVE_UP_BUTTON_ID)
    const lastQuestionBtn = getDOMElement(LAST_QUESTION_BUTTON_ID);
    nextQuestionBtn.style.visibility = 'visible';
    giveUpBtn.style.visibility = 'visible';
    lastQuestionBtn.style.visibility = 'hidden';
};


const showResultPage = () => {
    document.getElementById(
        'corrects'
    ).innerText = '';
    const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
    clearDOMElement(questionContainer);
    const resultElement = createQuizResultElement(quizData.correctAnswersCounter, lengthOfArray);
    questionContainer.appendChild(resultElement);
    const nextQuestionBtn = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    const giveUpBtn = getDOMElement(GIVE_UP_BUTTON_ID)
    const lastQuestionBtn = getDOMElement(LAST_QUESTION_BUTTON_ID);
    nextQuestionBtn.style.visibility = 'hidden';
    giveUpBtn.style.visibility = 'hidden';
    lastQuestionBtn.style.visibility = 'visible';
    quizData.correctAnswersCounter = 0;
};

export const backToStart =() => {
    const resetStartBtn = getDOMElement(START_QUIZ_BUTTON_ID);
    const restart = document.getElementById(QUIZ_CONTAINER_ID);
    const displayStartContainer = document.getElementById("start-container");
    const titleDisplay = getDOMElement(PAGE_TITLE);
    titleDisplay.innerText = '';
    displayStartContainer.style.display = 'flex';
    restart.style.display = 'none';
    resetStartBtn.style.visibility = 'visible';
    quizData.currentQuestionIndex = 0;
    showCurrentQuestion()
};
