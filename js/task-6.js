const inputRef = document.querySelector('#validation-input');

const blurHandler = () => {
  if (inputRef.textLength === +inputRef.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', blurHandler);
