const inputRef = document.querySelector('#validation-input');

const blurHandler = () => {
  if (inputRef.value.length === +inputRef.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else if (inputRef.value.length === 0) {
    inputRef.classList.remove('invalid', 'valid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', blurHandler);
