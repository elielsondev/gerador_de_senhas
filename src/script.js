import { nanoid } from 'nanoid';

const passwordBtn = document.querySelector('#passwordButton');
const displayPassword = document.querySelector('#passwordH2');
const inputDigit = document.querySelector('#digitInput');
const paragraphNumberDigit = document.querySelector('#digitNumberP');

setInterval(() => {
  paragraphNumberDigit.innerHTML = inputDigit.value;
}, 1);

passwordBtn.addEventListener('click', () => {
  const { value } = inputDigit;
  
  if (value < 1 || value > 36) {
    value = 21;
    passwordBtn.disabled = true;
  }
  
  const randomPassword = nanoid(value);
  displayPassword.innerHTML = randomPassword;
});
