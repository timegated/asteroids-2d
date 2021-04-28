import '../css/main.scss';
import { basicCanvas } from './test/basic';
import { canvasGrid } from './test/grid';
const canvas = document.querySelector('#asteroids');
const context = canvas.getContext('2d');


// basicCanvas(canvas, context);

canvasGrid(canvas, context);