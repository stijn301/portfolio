"use strict"

// Imports / Exports
import { c } from "../Canvas.js"
import { getBloomColor, interpolateColor } from "../ColorInterpolation.js"

export { Side, setUseBloom }


// Declarations
let distanceThreshold = 100
let useBloom = true

// Class
class Side {
  constructor(cornerA, cornerB) {
    this.cornerA = cornerA
    this.cornerB = cornerB
    this.color = interpolateColor(1)
    this.bloomColor = getBloomColor()

    this.prevColorT
  }

  update(pulse) {
    let dist = (this.cornerA.distFromMouse + this.cornerB.distFromMouse) / 2

    let distT = dist < distanceThreshold ? dist / distanceThreshold : 1

    let colorT = 1
    
    if(pulse < distT) {
      colorT = pulse
    } else {
      colorT = distT
    }

    if(colorT != this.prevColorT) {
      this.color = interpolateColor(colorT)
    }

    this.prevColorT = colorT

    if(useBloom) {
      this.drawWithBloom(colorT)
    } else {
      this.draw()
    }
  }

  draw() {
    c.strokeStyle = this.color
    c.lineWidth = 3
    c.beginPath()
    c.moveTo(this.cornerA.adjustedX(), this.cornerA.adjustedY())
    c.lineTo(this.cornerB.adjustedX(), this.cornerB.adjustedY())
    c.stroke()
    c.closePath()
  }

  drawWithBloom(colorT) {
    let start = {x: this.cornerA.adjustedX(), y: this.cornerA.adjustedY()}
    let end = {x: this.cornerB.adjustedX(), y: this.cornerB.adjustedY()}

    let minWidth = 3
    let bloomWidth = 12 * (1 - colorT)
    
    let widthStep = 4
    
    let iterations = Math.ceil(bloomWidth / widthStep)

    for(let i = iterations; i >= 0; i--) {
      if(i > 0) {
        c.strokeStyle = this.bloomColor
      } else {
        c.strokeStyle = this.color
      }
      c.lineWidth = iterations > 0 ? bloomWidth / iterations * i + minWidth : minWidth
      c.beginPath()
      c.moveTo(start.x, start.y)
      c.lineTo(end.x, end.y)
      c.stroke()
      c.closePath()
    }
    
  }
}

// Public functions

function setUseBloom(newValue) {
  useBloom = newValue
}