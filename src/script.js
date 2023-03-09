import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

const passwordBtn = document.querySelector('#passwordButton');
const displayPassword = document.querySelector('#passwordH2');
const inputDigit = document.querySelector('#digitInput');
const paragraphNumberDigit = document.querySelector('#digitNumberP');

setInterval(() => {
  if (inputDigit.value < 10) {
    paragraphNumberDigit.innerHTML = `0${inputDigit.value}`;
  } else {
    paragraphNumberDigit.innerHTML = inputDigit.value;
  }   
}, 100);

passwordBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  const { value } = inputDigit;

  const randomPassword = nanoid(value);
  
  copy(randomPassword);

  displayPassword.innerHTML = randomPassword;
  aviso();
});
