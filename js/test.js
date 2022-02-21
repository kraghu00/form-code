// generative hello world

let x = innerWidth/2
let y = innerHeight/2
let dy = 5
let dx = 5

function setup () {
  createCanvas(innerWidth, innerHeight)
  background(255,100,100)
}

function draw () {
  let g = random(0,255)
  let b = random(0,255)

  background(255, g, b, 10)
  let div = random(12,30)
  let d = width / div
  let r = d/2

  x += dx
  y += dy

  if (y > height - r || y < 0 + r) {dy= -dy}


  if (x > width - r || x < 0 + r) {dx= -dx}

  for (let i = 0; i < 1; i++) {
    let x = random(0, width)
    let y = random(0, height)
    strokeWeight(0)
    ellipse(x, y, d)
  }
}
