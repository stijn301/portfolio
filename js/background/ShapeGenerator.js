"use strict"
// Generate grid, Generate hex positions

// Imports / Exports
import { Hex } from "./classes/Hex.js"
import { setStartPosition } from "./FloodFill.js"

export { generateShapes, setHexSize, cols, rows, halfGridWidth, halfGridHeight }


// Declarations
let cols = 20
let rows = 10

let halfGridWidth
let halfGridHeight

let hexSize = 40

// Functions
function setHexSize(newSize) {
  hexSize = newSize
}

function generateShapes(hexArray, cornerArray) {
  // hex size
  let w = hexSize * 2
  let h = hexSize * Math.sqrt(3)

  halfGridWidth = w * .75 * cols / 2
  halfGridHeight = h * rows / 2

  for(let y = 0; y < rows * 2; y++) {
    for(let x = 0; x < cols; x++) {

      let item = null

      if((y % 2 == 0 && x % 2 == 0) || (y % 2 == 1 && x % 2 == 1)) {
        // only certain positions can have nodes

        item = new Hex((x * w * .75), (y * h / 2), hexSize)
        let newCorners = item.makeCorners(cornerArray)

        newCorners.forEach(corner => {
          cornerArray.push(corner)
        })
      }

      hexArray.push(item)
    }
  }

  setStartPosition(hexArray)
}