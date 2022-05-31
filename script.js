const adviceNumber = document.querySelector('#advice--number');
const adviceContent = document.querySelector(
  '.advice__contenct'
);

async function getAdvice() {
  const advice = await fetch(
    'https://api.adviceslip.com/advice'
  ).then(response => response.json());

  console.log(advice.slip);
}

getAdvice();
