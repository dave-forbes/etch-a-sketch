const gridContainer = document.querySelector('#grid-container');
const button = document.querySelector('button');

button.addEventListener('click', () => {

  gridContainer.innerHTML = '';

  const rowSize = prompt('What size would you like your grid?');

  gridContainer.style.cssText = `grid-template-columns: repeat(${rowSize}, 1fr); grid-template-rows: repeat(${rowSize}, 1fr);`;

  const gridTotal = Math.pow(rowSize, 2);

  const divs = Array.from({ length: gridTotal }, () => document.createElement('div'));

  gridContainer.append(...divs);

  divs.forEach((item) => item.addEventListener('mouseover', () => item.style.backgroundColor = 'black'));
});

