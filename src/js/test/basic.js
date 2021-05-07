const canvas = document.querySelector('#asteroids');
const context = canvas.getContext('2d');


export const basicCanvas = (element, ctx) => {
  ctx.strokeStyle = 'lightgrey';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 5;
  ctx.rect(75, 50, element.width - 150, element.height - 100);
  ctx.stroke();
  ctx.fill();
  
  ctx.fillStyle = '#FF2222';
  ctx.strokeStyle = '#FFAAAA';
  let msg = "2D Drawing";
  ctx.font = '34px Arial';
  ctx.fillText(msg, element.width / 2, 100);
  ctx.strokeText(msg, element.width / 2, 100);
  
  
  ctx.strokeStyle = '#2C2C2C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(200, 140, 20, 0, Math.PI * 2);
  ctx.moveTo(200, 160);
  ctx.lineTo(200, 220);
  ctx.moveTo(180, 300);
  ctx.lineTo(185, 260);
  ctx.lineTo(200, 220);
  ctx.lineTo(215, 260);
  ctx.lineTo(220, 300);
  ctx.moveTo(240, 130);
  ctx.lineTo(225, 170);
  ctx.lineTo(200, 170);
  ctx.lineTo(175, 180);
  ctx.lineTo(170, 220);
  ctx.stroke();
  
  console.log('The context ctx', context);
}
