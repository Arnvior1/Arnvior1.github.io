function setup() {
  createCanvas(500, 500);
  rectMode(CENTER)
}

function draw() {
  background(220);
  let c = 0;
  for (let i = width; i >= 100; i = i - 100) {
    circle(width / 2, height / 2, i);
    color(i, i, i);
    c = c + 20;
    rect(width / 2, height / 2, i, i);
    color(i, i, i);
    c = c + 20;
  }
}
