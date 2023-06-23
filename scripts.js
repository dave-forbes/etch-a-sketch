const gridContainer = document.querySelector('#grid-container');
const slider = document.querySelector('#slider');
const color = document.querySelector('#color');
const eraser = document.querySelector('#eraser');
const colorButton = document.querySelector('#color-button');
let colorValue = 'black';
const divs = Array.from({ length: 2500 }, () => document.createElement('div'));
gridContainer.style.cssText = `grid-template-columns: repeat(50, 1fr); grid-template-rows: repeat(50, 1fr);`;
gridContainer.append(...divs);
divs.forEach((item) => item.addEventListener('mouseover', () => item.style.backgroundColor = colorValue));
colorButton.style.color = 'gold';

color.addEventListener('change', () => colorValue = color.value);
color.addEventListener('change', () => {
  colorButton.style.color = 'gold';
  eraser.style.color = 'black';
})
eraser.addEventListener('click', () => colorValue = null);
eraser.addEventListener('click', () => {
  eraser.style.color = 'gold';
  colorButton.style.color = 'black';
}
);
colorButton.addEventListener('click', () => colorValue = color.value);
colorButton.addEventListener('click', () => {
  colorButton.style.color = 'gold';
  eraser.style.color = 'black';
}
);


slider.addEventListener('change', () => {
  gridContainer.innerHTML = '';
  const rowSize = slider.value;
  gridContainer.style.cssText = `grid-template-columns: repeat(${rowSize}, 1fr); grid-template-rows: repeat(${rowSize}, 1fr);`;
  const gridTotal = Math.pow(rowSize, 2);
  const divs = Array.from({ length: gridTotal }, () => document.createElement('div'));
  gridContainer.append(...divs);
  divs.forEach((item) => item.addEventListener('mouseover', () => item.style.backgroundColor = colorValue));
})

