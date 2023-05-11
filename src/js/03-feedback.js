import throttle from 'lodash/throttle';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  inputMale: document.querySelector('input[type="email"]'),
  textMessage: document.querySelector('textarea[name="message"]'),
  feedbackBtn: document.querySelector('button[type="submit"]'),
};

console.dir(refs.feedbackForm);

const LOCAL_KEY = 'feedback-form-state';

const feedback = {};

refs.feedbackForm.addEventListner();

function onSaveFeedback(event) {}

// // feedbackForm.elements.email;
// // feedbackForm.elements.message;

// feedbackBtn.addEventListener('submit', clearInput());
