const inputRef = document.querySelector('#validation-input');

const blurHandler = () => {
  switch (inputRef.textLength) {
    case 0:
      inputRef.classList.remove('invalid', 'valid');
      break;
    case Number(inputRef.dataset.length):
      inputRef.classList.add('valid');
      inputRef.classList.remove('invalid');
      break;

    default:
      inputRef.classList.add('invalid');
      inputRef.classList.remove('valid');
      break;
  }
  // if (inputRef.textLength === +inputRef.dataset.length) {
  //   inputRef.classList.add('valid');
  //   inputRef.classList.remove('invalid');
  // } else if (inputRef.textLength === 0) {
  //   inputRef.classList.remove('invalid', 'valid');
  // } else {
  //   inputRef.classList.add('invalid');
  //   inputRef.classList.remove('valid');
  // }
};

inputRef.addEventListener('blur', blurHandler);
