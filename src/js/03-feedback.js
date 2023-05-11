import throttle from 'lodash/throttle';

const feedbackFormEl = document.querySelector('.feedback-form');

const LOCAL_KEY = 'feedback-form-state';

feedbackFormEl.addEventListener('input', throttle(onSaveFeedback, 500));
feedbackFormEl.addEventListener('submit', onSubmitFeedbackForm);

function onSaveFeedback(event) {
  const feedback = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
  feedback[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_KEY, JSON.stringify(feedback));
}

function updateForm() {
  const localStorageData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (localStorageData) {
    feedbackFormEl.elements.email.value = localStorageData.email || '';
    feedbackFormEl.elements.message.value = localStorageData.message || '';
  }
}

updateForm();

function onSubmitFeedbackForm(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
  localStorage.removeItem(LOCAL_KEY);
  feedbackFormEl.reset();
}
