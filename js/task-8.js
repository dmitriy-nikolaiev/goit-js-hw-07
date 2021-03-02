const inputNumberRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector(
  '#controls button[data-action="render"]',
);
const destroyBtnRef = document.querySelector(
  '#controls button[data-action="destroy"]',
);
const boxesDivRef = document.querySelector('div#boxes');

let boxSize = 30;

const destroyBoxes = () => {
  boxesDivRef.innerHTML = '';
  boxSize = 30;
  inputNumberRef.value = 0;
};

const createBoxes = amount => {
  const createdBoxes = [];

  while (amount > 0) {
    const currentBox = document.createElement('div');
    currentBox.style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    currentBox.style.width = boxSize + 'px';
    currentBox.style.height = boxSize + 'px';

    createdBoxes.push(currentBox);
    boxSize += 10;
    amount -= 1;
  }

  boxesDivRef.append(...createdBoxes);
};

createBtnRef.addEventListener('click', () => {
  createBoxes(inputNumberRef.valueAsNumber);
});

destroyBtnRef.addEventListener('click', destroyBoxes);
