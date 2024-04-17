// Get the target date from the data-date attribute
const targetDate = document.getElementById('lgx-countdown').getAttribute('data-date');

// Update the countdown every second
setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current date and time
    const currentDate = new Date().getTime();

    // Calculate the difference between the target date and the current date
    const difference = new Date(targetDate) - currentDate;

    // Calculate the days, hours, minutes, and seconds remaining
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the countdown element with the remaining time
    document.getElementsByClassName('lgx-day')[0].innerHTML = days + ' <i> Dag </i>';
    document.getElementsByClassName('lgx-hr')[0].innerHTML = hours + ' <i> Tim </i>';
    document.getElementsByClassName('lgx-min')[0].innerHTML = minutes + ' <i> Min </i>';
    document.getElementsByClassName('lgx-sec')[0].innerHTML = seconds + ' <i> Sek </i>';
}