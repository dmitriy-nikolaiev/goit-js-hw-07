const allListItems = document.querySelectorAll('#categories .item');
console.log(`В списке ${allListItems.length} категории.`);

allListItems.forEach(listItem => {
  const itemTitle = listItem.querySelector('h2').textContent;
  console.log(`Категория: ${itemTitle}`);
  const itemsLength = listItem.querySelectorAll('li').length;
  console.log(`Количество элементов: ${itemsLength}`);
});
