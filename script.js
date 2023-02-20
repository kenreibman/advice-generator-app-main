const adviceQuote = document.querySelector('#adviceQuote');
const adviceId = document.querySelector('#adviceId');

const adviceButton = document.querySelector('#adviceButton');

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      adviceId.innerHTML = data.slip.id;
      adviceQuote.innerHTML = data.slip.advice;
    })
    .catch((error) => console.log(error));
}

adviceButton.addEventListener('click', function () {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};
