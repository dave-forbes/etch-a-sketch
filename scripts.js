const gridContainer = document.querySelector('#grid-container');
const divs = Array.from({ length: 256 }, () => document.createElement('div'));

gridContainer.append(...divs);

divs.forEach((item) => item.addEventListener('mouseover', () => item.style.backgroundColor = 'black'));