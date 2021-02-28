const sizeControlRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

sizeControlRef.addEventListener('input', event => {
  textRef.style.fontSize = event.target.value + 'pt';
});
