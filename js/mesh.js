
let d = 100
let total = 100
let xs = []
let ys = []
let dxs = []
let dys = []

function setup () {
  createCanvas(innerWidth, innerHeight)
  background(0)

  for (var i = 0; i < total; i++) {
    xs.push(innerWidth/2)
    ys.push(innerHeight/2)
    dxs.push(random(-2,2))
    dys.push(random(-2,2))
  }

}

function draw () {
  background(0)
  for (var i = 0; i < total; i++) {
    xs[i] += dxs[i]
    ys[i] += dys[i]
    ellipse(xs[i],ys[i],d)
  }
}
