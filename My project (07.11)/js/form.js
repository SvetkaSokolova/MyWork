const form = document.getElementById('feedback-form');
const userInput = {};
form.addEventListener('submit', (event) => {
  userInput.name = form[0].value;
  userInput.surName = form[1].value;
  userInput.email = form[2].value;
  userInput.phone = form[3].value;
  userInput.message = form[4].value;
  console.log(userInput);
  form.reset();
  addSuccessMsg();
  event.preventDefault();
});

function addSuccessMsg() {
  let el = document.createElement('div');
  el.innerHTML = 'Thank you!';
  el.className = 'alert alert-success';
  form.after(el);
  removeElement(el, 5000);
}

function removeElement(el, timeout = 3000) {
  setTimeout(() => {
    el.remove();
  }, timeout)
}
