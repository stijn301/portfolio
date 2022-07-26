"use strict"
// Floodfill algorithm

// Imports / Exports
import { cols, rows } from "./ShapeGenerator.js"

export { setStartPosition, floodFillStep, floodFillComplete, resetFloodFill }


// Declarations
let queue = []
let floodFillIteration = 0
let floodFillComplete = false


// Functions
function setStartPosition(hexArray) {
  // setup floodFill alg
  let startIndex = Math.floor(rows * cols + cols * 0.5)
  let startHex = hexArray[startIndex]
  while(startHex == null) {
    startIndex++
    startHex = hexArray[startIndex]
  }

  queue.push([startIndex % cols, Math.floor(startIndex / cols)])
}

function resetFloodFill() {
  queue = []
  floodFillIteration = 0
  floodFillComplete = false
}

function floodFillStep(hexArray, sideArray) {
  if(floodFillComplete) return

  // Take first element from queue, if queue empty, floodFill is completed
  if(queue.length > 0) {
    let currPos = queue.shift()

    let posX = currPos[0]
    let posY = currPos[1]

    let currHex = hexArray[posY * cols + posX]

    currHex.isFloodFlagged = true

    floodFillIteration++

    // Generate sides of hexes, and add them to array
    if(floodFillIteration <= 6) {
      let newSides = currHex.makeSides(sideArray, floodFillIteration, true)
      newSides.forEach(side => {
        sideArray.push(side)
      })

    } else {
      let newSides = currHex.makeSides(sideArray, floodFillIteration)
      newSides.forEach(side => {
        sideArray.push(side)
      })
    }

    // add neighbours to queue
    if(checkIfValid(hexArray, posX, posY - 2)) {
      hexArray[(posY - 2) * cols + posX].isFloodFlagged = true
      queue.push([posX, posY - 2])
    }
    if(checkIfValid(hexArray, posX + 1, posY - 1)) {
      hexArray[(posY - 1) * cols + (posX + 1)].isFloodFlagged = true
      queue.push([posX + 1, posY - 1])
    }
    if(checkIfValid(hexArray, posX + 1, posY + 1)) {
      hexArray[(posY + 1) * cols + (posX + 1)].isFloodFlagged = true
      queue.push([posX + 1, posY + 1])
    }
    if(checkIfValid(hexArray, posX, posY + 2)) {
      hexArray[(posY + 2) * cols + posX].isFloodFlagged = true
      queue.push([posX, posY + 2])
    }
    if(checkIfValid(hexArray, posX - 1, posY + 1)) {
      hexArray[(posY + 1) * cols + (posX - 1)].isFloodFlagged = true
      queue.push([posX - 1, posY + 1])
    }
    if(checkIfValid(hexArray, posX - 1, posY - 1)) {
      hexArray[(posY - 1) * cols + (posX - 1)].isFloodFlagged = true
      queue.push([posX - 1, posY - 1])
    }

  } else {
    floodFillComplete = true
  }
}

function checkIfValid(hexArray, x, y) {
  let hex = hexArray[y * cols + x]
  if(x < 0 || x >= cols || y < 0 || y >= rows * 2 || hex == null || hex.isFloodFlagged || !hex.hasConnections()) return false
  return true
}