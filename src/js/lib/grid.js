export const drawGrid = (el, obj, stroke, fill) => {
  obj.save();
  obj.strokeStyle = stroke;
  obj.lineWidth = 0.25;
  obj.fillStyle = fill;

  for (let x = 0; x < el.width; x += 10) {
    obj.beginPath();
    obj.moveTo(x, 0);
    obj.lineTo(x, el.height);
    if (x % 50 == 0) { obj.fillText(x, x, 10);}
    obj.lineWidth = (x % 50 == 0) ? 0.5 : 0.25;
    obj.stroke()
  }
  for (let y = 0; y < el.height; y += 10) {
    obj.beginPath();
    obj.moveTo(0, y);
    obj.lineTo(el.width, y);
    if (y % 50 == 0) { obj.fillText(y, 0, y + 10);}
    obj.lineWidth = (y % 50 == 0) ? 0.5 : 0.25;
    obj.stroke()
  }
  obj.restore();
};