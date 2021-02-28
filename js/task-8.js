const inputNumberRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector(
  '#controls button[data-action="render"]',
);
const destroyBtnRef = document.querySelector(
  '#controls button[data-action="destroy"]',
);

const boxesDivRef = document.querySelector('div#boxes');

const destroyBoxes = () => {
  boxesDivRef.innerHTML = '';
};
// Нужно ли использовать Math.random().toFixed() ?

const createBoxes = amount => {
  destroyBoxes();
  let boxSize = 30;
  const createdBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const currentBox = document.createElement('div');
    const newColor = `background-color: rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    const newSize = `width: ${boxSize}px; height: ${boxSize}px`;
    currentBox.setAttribute('style', `${newColor}; ${newSize};`);
    createdBoxes.push(currentBox);
    boxSize += 10;
  }
  boxesDivRef.append(...createdBoxes);

  if (boxesDivRef.lastChild !== null) {
    boxesDivRef.lastChild.scrollIntoView();
  }
};

createBtnRef.addEventListener('click', () => {
  createBoxes(inputNumberRef.value);
});

destroyBtnRef.addEventListener('click', destroyBoxes);
