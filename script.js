const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');

const dateForLAN = new Date('Nov 14, 2023 20:00:00').getTime(); // Use getTime() to get the timestamp

function countdown() {
    const currentDate = new Date().getTime();

    const totalSeconds = (dateForLAN - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysE1.innerHTML = formatTime(days);
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial call
countdown();

setInterval(countdown, 1000);
