function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0)
}

function draw () {

  let h = height
  let x = mouseX
  let y = mouseY

    d = ((mouseY - height)*(width/height) - (mouseX - width))/10

  let r = random(100,255)
  let g = random(200,255)
  let b = random(100,255)

  strokeWeight(0)
  fill(r,255,b)

  if (mouseIsPressed) {
    ellipse(x, y, d)
  }
}
