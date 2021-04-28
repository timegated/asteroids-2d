
export const canvasGrid = (element, object) => {
  object.save();
  object.strokeStyle = '#00FF00';
  object.lineWidth = 0.25;
  object.fillStyle = '#009900';

  for (let x = 0; x < element.width; x += 10) {
    object.beginPath();
    object.moveTo(x, 0);
    object.lineTo(x, element.height);
    if (x % 50 == 0) { object.fillText(x, x, 10);}
    object.lineWidth = (x % 50 == 0) ? 0.5 : 0.25;
    object.stroke()
  }
  for (let y = 0; y < element.height; y += 10) {
    object.beginPath();
    object.moveTo(0, y);
    object.lineTo(element.width, y);
    if (y % 50 == 0) { object.fillText(y, 0, y + 10);}
    object.lineWidth = (y % 50 == 0) ? 0.5 : 0.25;
    object.stroke()
  }
  object.restore();
};