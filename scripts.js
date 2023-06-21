const gridContainer = document.querySelector('#grid-container');


const rowSize = prompt('What size would you like your grid?');
const gridTotal = Math.pow(rowSize, 2);

gridContainer.style.cssText = `grid-template-columns: repeat(${rowSize}, 1fr); grid-template-rows: repeat(${rowSize}, 1fr);`;


const divs = Array.from({ length: gridTotal }, () => document.createElement('div'));

gridContainer.append(...divs);

divs.forEach((item) => item.addEventListener('mouseover', () => item.style.backgroundColor = 'black'));