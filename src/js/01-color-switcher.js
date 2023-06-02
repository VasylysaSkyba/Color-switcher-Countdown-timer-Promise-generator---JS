

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),


};
refs.btnStop.disabled = true;
refs.btnStart.addEventListener('click', onBtnStartChangeColor);
refs.btnStop.addEventListener('click', onBtnStopChangeColor);