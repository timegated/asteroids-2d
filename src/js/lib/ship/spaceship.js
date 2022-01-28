import { drawGrid } from '../grid';
import { drawShip } from '../drawing';

export const basicShip = (el, obj) => {
  drawGrid(obj);
  drawShip(obj, 200, 200, 150, { guide: true });
}