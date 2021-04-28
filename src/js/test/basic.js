const canvas = document.querySelector('#asteroids');
const context = canvas.getContext('2d');


export const basicCanvas = (element, object) => {
  object.strokeStyle = 'lightgrey';
  object.fillStyle = 'white';
  object.lineWidth = 5;
  object.rect(75, 50, element.width - 150, element.height - 100);
  object.stroke();
  object.fill();
  
  object.fillStyle = '#FF2222';
  object.strokeStyle = '#FFAAAA';
  let msg = "2D Drawing";
  object.font = '34px Arial';
  object.fillText(msg, element.width / 2, 100);
  object.strokeText(msg, element.width / 2, 100);
  
  
  object.strokeStyle = '#2C2C2C';
  object.lineWidth = 2;
  object.beginPath();
  object.arc(200, 140, 20, 0, Math.PI * 2);
  object.moveTo(200, 160);
  object.lineTo(200, 220);
  object.moveTo(180, 300);
  object.lineTo(185, 260);
  object.lineTo(200, 220);
  object.lineTo(215, 260);
  object.lineTo(220, 300);
  object.moveTo(240, 130);
  object.lineTo(225, 170);
  object.lineTo(200, 170);
  object.lineTo(175, 180);
  object.lineTo(170, 220);
  object.stroke();
  
  console.log('The context object', context);
}
