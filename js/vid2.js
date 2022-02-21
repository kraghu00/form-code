let total = 100
let i = 0
let radius = 300
let d = 30

function setup () {
  createCanvas(innerWidth, innerHeight)
  background(0)

}
  function draw () {
    i+=0.25
    let offsetX = width/2
    let offsetY = height/2
    let x = sin(i * 0.15) * radius + offsetX
    let y = cos(i * 0.95) * radius + offsetY

    let r = random(250,255)
    let g = random(0,255)
    let b = random(0,255)

    strokeWeight(0)
    fill(r,g,b)
    ellipse(x,y,d)
  }
