'use strict';


import {NEXT_QUESTION_BUTTON_ID, LAST_QUESTION_BUTTON_ID, ANSWER_CONTAINER_ID, GIVE_UP_BUTTON_ID, START_QUIZ_BUTTON_ID} from '../constants.js';
import {nextQuestion, checkAnswer, displayCorrectAnswer,startQuizClick, restart} from '../listeners/questionListeners.js';
import {createDOMElement} from '../utils/DOMUtils.js';

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText, elementID) => {
    const answerElement = createDOMElement('li', {
        id: elementID,
    });
    answerElement.innerText = answerText;
    answerElement.style.cursor = "pointer";
    answerElement.classList.add('answers-default','answers-default:hover');
    answerElement.addEventListener("click", checkAnswer, {passive: true})

    return answerElement;
};


/**
 * Create a full question element
 */
export const createQuestionElement = (question) => {
    const container = createDOMElement('div');
    container.classList.add('container');
    const title = createDOMElement('h1');
    title.innerText = question.text;
    title.classList.add('question-title')
    container.appendChild(title);
    

    const answerContainer = createDOMElement('ol', {
        id: ANSWER_CONTAINER_ID,
    });

    for (const answerKey in question.answers) {
        const answer = createAnswerElement(question.answers[answerKey], answerKey);
        answerContainer.appendChild(answer);
    }
    answerContainer.classList.add('answer-container')
    container.appendChild(answerContainer);
    return container;
};
/**Create start quiz button  */

export const createStartQuizBtn = () => {
    const start_btn = createDOMElement('button', {
        id:START_QUIZ_BUTTON_ID
    });
    start_btn.innerText = 'Start Quiz';
    start_btn.addEventListener('click',startQuizClick);
    return start_btn;
};

/**
 * Creates and returns the next questions button
 */

export const createNextQuestionButtonElement = () => {
 
    const buttonElement = createDOMElement('button', {
        id: NEXT_QUESTION_BUTTON_ID,
    });

    

    buttonElement.innerText = 'Next question';
    buttonElement.addEventListener('click',nextQuestion);
    return buttonElement;

};

//Create a button to help the use to see the correct answer 
export const createGiveUpButtonElement = () => {
    const giveUpButton = createDOMElement('button', {
        id: GIVE_UP_BUTTON_ID,
    });

    giveUpButton.innerText = 'Give up';
    giveUpButton.addEventListener('click', displayCorrectAnswer);
    return giveUpButton;
};

/**
 * Creates and returns the restart test button
 */

export const createLastQuestionButtonElement = () => {
    const buttonLastElement = createDOMElement('button', {
        id: LAST_QUESTION_BUTTON_ID,
    });

    buttonLastElement.innerText = 'Restart Test';

    buttonLastElement.addEventListener('click',restart);

    return buttonLastElement;
};


/**
 * Creates and returns the quiz result element
 */

export const createQuizResultElement = (numCorrect, numQuestions) => {
    const resultElement = createDOMElement('div');
    const titleElement = createDOMElement('h1');
    if(numCorrect >= 5){
      titleElement.innerText = "You are a true Warrior!";
    }else{
      titleElement.innerText = "You are a junior fighter, try again!";
    }
    
    titleElement.classList.add('final-score-title');
    resultElement.appendChild(titleElement);

    const scoreElement = createDOMElement('h2');
    scoreElement.innerText = `You got ${numCorrect} out of ${numQuestions}`;
    scoreElement.classList.add('final-score-title');
    resultElement.appendChild(scoreElement);

    return resultElement;
};

