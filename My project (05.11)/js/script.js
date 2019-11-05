const buttonUp = document.getElementById('button-up');
let intervalId;


window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    buttonUp.style.opacity = '0.8';
  } else {
    buttonUp.style.opacity = '0';
  }
});

buttonUp.addEventListener('click', () => {
  let topScroll = window.scrollY;
  let iteration = Math.round(topScroll / 60);
  intervalId = setInterval(() => {
      window.scrollTo(0, topScroll);
      topScroll -= iteration;
      if (topScroll < iteration) {
        window.scrollTo(0, 0);
        clearInterval(intervalId);
      }
  }, 1000 / 60)
});