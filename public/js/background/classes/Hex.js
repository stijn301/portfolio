"use strict"

// Imports / Exports
import { Corner } from "./Corner.js"
import { Side } from "./Side.js"

export { Hex }


// Class
class Hex {
  constructor(x, y, size) {
    this.x = x
    this.y = y
    this.size = size
    this.isFloodFlagged = false
    this.hasConnections = () => {
      for(const corner of this.corners) {
        if(corner.hasConnection) return true
      }
      return false
    }
  }

  makeCorners(cornerArray) {
    this.corners = []
    let newCorners = []

    for(let i = 0; i < 6; i++) {
      let angleRad = Math.PI / 3 * i

      let x = this.x + this.size * Math.cos(angleRad)
      let y = this.y + this.size * Math.sin(angleRad)

      let isNewCorner = true
      for(const corner of cornerArray) {
        if(Math.abs(x - corner.x) < 1 && Math.abs(y - corner.y) < 1) {
          this.corners.push(corner)
          isNewCorner = false
          break
        }
      }

      if(isNewCorner) {
        let newCorner = new Corner(
          this.x + this.size * Math.cos(angleRad),
          this.y + this.size * Math.sin(angleRad)
        )
        this.corners.push(newCorner)
        newCorners.push(newCorner)
      }
    }

    return newCorners
  }

  makeSides(sideArray, floodIteration, forceSides = false) {
    this.sides = []
    let newSides = []

    let chanceModifier = floodIteration * 0.0025 // the higher this is the LESS likely a side is made

    for(let i = 0; i < 6; i++) {
      let a = this.corners[i]
      let b = this.corners[(i+1)%6]

      let isNewSide = true
      for(const side of sideArray) {
        if(side.cornerA == b && side.cornerB == a) {
          this.sides.push(side)
          isNewSide = false
          break
        }
      }

      if(isNewSide) {
        if(forceSides || a.hasConnection || b.hasConnection) {
          let makeSide = (Math.random() + chanceModifier) < 0.6
          
          if(forceSides || makeSide) {
            a.hasConnection = true
            b.hasConnection = true
            
            let newSide = new Side(a, b)
            this.sides.push(newSide)
            newSides.push(newSide)
          }
        }
      }

    }

    return newSides
  }
}