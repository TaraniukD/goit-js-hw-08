import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputValue, 500));

populateFormsValue()

const formData = {};

function onFormSubmit(e) {
e.preventDefault();

e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);

console.log(formData);
}

function onInputValue(e) {
    formData[e.target.name] = e.target.value;
    const inputValue = JSON.stringify(formData)
       
    localStorage.setItem(STORAGE_KEY, inputValue);
}

function populateFormsValue() {
    const savedValue = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (savedValue) {
        console.log(savedValue);
        refs.input.value = savedValue.email;
        refs.textarea.value = savedValue.message;
    }
}
