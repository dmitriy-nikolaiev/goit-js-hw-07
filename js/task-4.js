const counterRef = document.querySelector('#counter');
const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]',
);
const valueRef = document.querySelector('#value');

let counterValue = 0;

const renderValue = () => {
  valueRef.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  renderValue();
};
const decrement = () => {
  counterValue -= 1;
  renderValue();
};

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);

// Version 2:
// const btnClickHandler = event => {
//   counterValue += event.target.dataset.action === 'increment' ? 1 : -1;
//   valueRef.textContent = counterValue;;
// };

// decrementBtnRef.addEventListener('click', btnClickHandler);
// incrementBtnRef.addEventListener('click', btnClickHandler);
