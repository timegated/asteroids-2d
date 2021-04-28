import { drawGrid } from '../js/lib/grid';
import { drawShip } from '../js/lib/drawing';

export const basicShip = (el, obj) => {
  drawGrid(obj);
  drawShip(obj, 200, 200, 150, { guide: true });
}