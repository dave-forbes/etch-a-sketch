const gridContainer = document.querySelector('#grid-container');
const slider = document.querySelector('#slider');
const color = document.querySelector('#color');
const eraser = document.querySelector('#eraser');



colorValue = 'black';

color.addEventListener('change', () => colorValue = color.value);


window.onload = () => {
  gridContainer.style.cssText = `grid-template-columns: repeat(50, 1fr); grid-template-rows: repeat(50, 1fr);`;
  const divs = Array.from({ length: 2500 }, () => document.createElement('div'));
  gridContainer.append(...divs);
  divs.forEach((item) => item.addEventListener('mouseover', () => item.style.backgroundColor = colorValue));
}

slider.addEventListener('change', () => {

  gridContainer.innerHTML = '';

  const rowSize = slider.value;

  gridContainer.style.cssText = `grid-template-columns: repeat(${rowSize}, 1fr); grid-template-rows: repeat(${rowSize}, 1fr);`;

  const gridTotal = Math.pow(rowSize, 2);

  const divs = Array.from({ length: gridTotal }, () => document.createElement('div'));

  gridContainer.append(...divs);

  divs.forEach((item) => item.addEventListener('mouseover', () => item.style.backgroundColor = colorValue));
  divs.forEach((item) => item.addEventListener('mousedown', () => item.style.backgroundColor = colorValue));
});

eraser.addEventListener('click', () => {
  colorValue = null;
})



