const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listItems = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  return listItem;
  // Почему не получается с цепочкой? Вероятно элемент еще не создан
  //   return document.createElement('li').insertAdjacentText('afterbegin', ingredient);
});

const ingredientsList = document.querySelector('#ingredients');

ingredientsList.append(...listItems);
