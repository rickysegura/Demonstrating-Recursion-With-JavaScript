const paper = { el: document.getElementById("canvas") };
const width = paper.el.width;
const height = paper.el.height;

const ctx = paper.el.getContext("2d");
//set background
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

function drawDifferent(n)
{
  ctx.beginPath();
  ctx.save();

  ctx.strokeStyle = "white";
  ctx.arc(n * 5, n * 5, n*2, 0, 2 * Math.PI);
  ctx.fillStyle = "cyan";
  ctx.fill();
  ctx.stroke();

  if(n <= 0) { return; }

  drawDifferent(n - 1);
  ctx.restore();
}

drawDifferent(100);