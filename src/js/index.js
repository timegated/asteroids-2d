const canvas = document.querySelector('#asteroids');
const context = canvas.getContext('2d');

context.strokeStyle = 'gray';
context.lineWidth = 5;
context.rect(75, 75, 250, 250);
context.stroke();

console.log('whatever this context object is', context);