'use strict'
const btn = document.querySelector('.btn-flip');
const flipper = document.querySelector('.flipper');

btn.addEventListener('click', () => {
  flipper.classList.toggle('flip')
})
