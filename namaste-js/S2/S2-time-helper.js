/**
 * Timer helper
 */
let seconds = 0;
const timers = setInterval(() => {
  console.log(seconds);
  seconds++;

  if (seconds > 5) {
    clearInterval(timers);
  }
}, 1000);
