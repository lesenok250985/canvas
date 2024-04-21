var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.arc(200, 200, 150, 0, Math.PI * 2, true); 
ctx.fillStyle = 'yellow'; 
ctx.fill();


ctx.beginPath();
ctx.arc(120, 160, 130, 0, Math.PI*2, true); 
ctx.fillStyle = 'white'; 
ctx.fill();

ctx.beginPath();
ctx.arc(270, 200, 2, 0, Math.PI * 2); 
ctx.fillStyle = 'black'; 
ctx.fill();

ctx.beginPath();
ctx.arc(330, 200, 2, 0, Math.PI * 2); 
ctx.fill();

ctx.fillStyle = "#000";
ctx.beginPath();
ctx.ellipse(270, 250, 20, 30, Math.PI * 0.25, 0, Math.PI);
ctx.fill();
ctx.fillStyle = '#ffffff';


function drawRotatedRect(x, y, width, height, angle, color) {
    ctx.save(); 
    ctx.translate(x + width / 2, y + height / 2); 
    ctx.rotate(angle); 
    ctx.fillStyle = color;
    ctx.fillRect(-width / 2, -height / 2, width, height); 
    ctx.restore();
}

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
ctx.translate(centerX, centerY);
ctx.rotate(Math.PI / 4); 
ctx.translate(-centerX, -centerY);

// Рисуем два прямоугольника
drawRotatedRect(290, 185, 8, 8, 0, 'white');
drawRotatedRect(281, 185, 8, 8, 0, 'white');

