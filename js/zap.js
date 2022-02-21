
let d = 100
let total = 200
let xs = []
let ys = []
let dxs = []
let dys = []

function setup () {
  createCanvas(innerWidth, innerHeight)
  background(0)

  for (var i = 0; i < total; i++) {
    xs.push(random(0,innerWidth))
    ys.push(innerHeight/2)
    dxs.push(random(-10,10))
    dys.push(random(-10,10))
  }
}


function drawOverlaps (x , y) {
  let r = random (100,255)
  let g = random (0,255)
  let b = random (100,255)
  stroke(r,255,b)
  for (var i = 0; i < total; i++) {
    let distance = dist(x, y, xs[i], ys[i])
    if (distance < d && distance !== 0) {
      line(x, y, xs[i], ys[i])
    }
  }
}

function draw () {
  let r2 = random (0,10)
  let g2 = random (0,100)
  let b2 = random (0,10)
  background(r2,g2,b2, 10) // background slightly flickers between black and dark shade of green

  for (let i = 0; i < total; i++) {
    xs[i] += dxs[i]
    if (xs[i] > width || xs[i] < 0) dxs[i] = -dxs[i]
    ys[i] += dys[i]
    if (ys[i] > height || ys[i] < 0) dys[i] = -dys[i]
    // ellipse(xs[i],ys[i],d)
    let distance2 = dist(mouseX, mouseY, xs[i], ys[i]) // sets radius of mouse click
    if (mouseIsPressed && distance2 < 150) { // pattern only shows up if clicked
      drawOverlaps(xs[i], ys[i])
    }
  }

}
