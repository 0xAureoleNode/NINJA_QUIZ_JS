// create correct array to store correct answers
const correctAnswer = ['B', 'B', 'B', 'B', 'B'];
// attach an event listener to the form( listen when user has submitted)
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
let scoreElement = document.querySelector('.text-primary.display-4.p-3');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 20;
    }
  });

  window.scrollTo(0, 0);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 30);
});
