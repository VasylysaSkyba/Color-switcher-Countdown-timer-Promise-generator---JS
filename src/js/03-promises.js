import Notiflix from "notiflix";

const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const createPromisesBtn = document.querySelector('button[type="submit"]');

form.addEventListener('submit', onSumbit);


function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {

  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    resolve({ position, delay });
  } else {
    // Reject
    reject({ position, delay });
  }
}, delay);
  });
  return promise;
}


