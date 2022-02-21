// generative hello world
function setup () {
  createCanvas(innerWidth, innerHeight)
  background(100,10,10)
}

function draw () {
  let g = random(0,10)
  let b = random(0,10)

  background(100, g, b, 10)
  let div = random(12,30)
  let d = width / div
  let r = d/2

  for (let i = 0; i < 1; i++) {
    let x = random(0, width)
    let y = random(0, height)
    strokeWeight(0)
    fill(255,0,0)
    ellipse(x, y, d)
  }
}
