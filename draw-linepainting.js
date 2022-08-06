const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
    '#c56cf0',
    '#ffb8b8',
    '#ff3838',
    '#ff9f1a',
    '#ff9f1a',
    '#fff200',
    '#32ff7e',
    '#7efff5',
    '#18dcff',
    '#7d5fff',
    '#4b4b4b'
]


function onClick(event) {
    console.log(event);
    ctx.beginPath();
    const color  = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.moveTo(0, 0);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener('mousemove', onClick);