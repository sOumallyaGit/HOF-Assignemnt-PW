let delay = 5; // Delay in seconds
let timeRemaining = delay;
let timer = setInterval(() => {
  timeRemaining--;
  console.log(`Generating random number in ${timeRemaining} seconds...`);
  if (timeRemaining === 0) {
    clearInterval(timer);
    let randomNum = Math.floor(Math.random() * 100);
    console.log(`Random number generated: ${randomNum}`);
  }
}, 1000);
