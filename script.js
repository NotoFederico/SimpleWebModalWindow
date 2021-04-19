'use strict';

const showModal = {
  all: document.querySelectorAll('.show-modal'),
  btn1: document.querySelectorAll('.show-modal')[0],
  btn2: document.querySelectorAll('.show-modal')[1],
  btn3: document.querySelectorAll('.show-modal')[2],
};
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

/* removes "hidden" property and shows modal and overlay */
const hidElemnts = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
/* adds "hidden" property and hides modal and overlay */
const showElemnts = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.all.length; i++)
  showModal.all[i].addEventListener('click', showElemnts);
btnCloseModal.addEventListener('click', hidElemnts);
overlay.addEventListener('click', hidElemnts);
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) hidElemnts();
});
