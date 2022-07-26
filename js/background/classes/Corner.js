"use strict"

// Imports / Exports
import { c, canvasData } from "../Canvas.js"
import { interpolateColor } from "../ColorInterpolation.js"
import { halfGridHeight, halfGridWidth } from "../ShapeGenerator.js"

export { Corner }


// Declarations
let cornerRadius = 5
let distanceThreshold = 100


// Class
class Corner {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.adjustedX = () => this.x + canvasData.x - halfGridWidth
    this.adjustedY = () => this.y + canvasData.y - canvasData.yOffset - halfGridHeight
    this.hasConnection = false
    this.color = interpolateColor(1)

    this.distFromMouse
    
    this.prevColorT
  }

  update(mouseX, pulse) {
    if(!this.hasConnection) return
    
    this.distFromMouse = Math.abs(mouseX - this.adjustedX())
    let distT = this.distFromMouse < distanceThreshold ? this.distFromMouse / distanceThreshold : 1

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

    this.draw()
  }

  draw() {
    c.beginPath()
    c.arc(this.adjustedX(), this.adjustedY(), cornerRadius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }
}
