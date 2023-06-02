import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dataTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');
const daysLabel = document.querySelector('span[data-days]');
const hoursLabel = document.querySelector('span[data-hours]');
const minutesLabel = document.querySelector('span[data-minutes]');
const secondsLabel = document.querySelector('span[data-seconds]');