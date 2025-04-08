// script.js
const countdown = () => {
    const launchDate = new Date("2025-02-01T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = launchDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(timeLeft / day);
    const hours = Math.floor((timeLeft % day) / hour);
    const minutes = Math.floor((timeLeft % hour) / minute);
    const seconds = Math.floor((timeLeft % minute) / second);
  
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  
    if (timeLeft <= 0) {
      clearInterval(interval);
      document.querySelector(".page-container").innerHTML = `
        <h1>We're Live!</h1>
        <p>Thank you for your patience. Our website is now live.</p>
      `;
    }
  };
  
  // Update countdown every second
  const interval = setInterval(countdown, 1000);
  