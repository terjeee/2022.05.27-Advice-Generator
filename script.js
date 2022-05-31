const htmlAdviceID = document.querySelector('#advice--number');
const htmlAdvice = document.querySelector('.advice__content');
const btn = document.querySelector('.advice__dice');

// eventListener

btn.addEventListener('click', function () {
  async function getAdvice() {
    await fetch('https://api.adviceslip.com/advice').then(response =>
      response.json().then(data => {
        htmlAdviceID.innerHTML = data.slip.id;
        htmlAdvice.innerHTML = data.slip.advice;
      })
    );
  }

  getAdvice();
});
