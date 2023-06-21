const gridContainer = document.querySelector('#grid-container');
const divs = Array.from({ length: 256 }, (i) => document.createElement('div'));
gridContainer.append(...divs);