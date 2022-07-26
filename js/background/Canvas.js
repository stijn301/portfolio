"use strict"
// Canvas info, Animation loop, Mouse info, Pulse calculations

// Imports / Exports
import { generateShapes } from "./ShapeGenerator.js"
import { floodFillComplete, floodFillStep, resetFloodFill } from "./FloodFill.js"
import "./Settings.js"

export { c, canvasData, mouse, generateNew }


// Declarations

// Canvas
const canvasContainer = document.querySelector('#canvas-container')
const canvas = document.querySelector('#canvas')
const c = canvas.getContext('2d')  // context of the canvas element

canvas.width = canvasContainer.clientWidth
canvas.height = canvasContainer.clientHeight

let maxScrollHeight = document.body.scrollHeight - window.innerHeight
let scrollMultiplier = 0.3
let yOffsetTarget = (window.scrollY - maxScrollHeight / 2) * scrollMultiplier

const canvasData = {
  x: Math.round(canvas.width / 1.6), // i want a offset to the right. otherwise this would be  / 2
  y: Math.round(canvas.height / 2),
  yOffset: (window.scrollY - maxScrollHeight / 2) * scrollMultiplier,
  width: canvas.width,
  height: canvas.height
}

// Mouse properties
const mouse = {
  x: undefined,
  y: undefined
}

// Pulse effect
let pulseCap = 1
let pulseDamp = 1

// Object arrays
let hexArray = []
let cornerArray = []
let sideArray = []


// Event listeners
window.addEventListener('mousemove', e => {
  mouse.x = e.x
  mouse.y = e.y
})

window.addEventListener('click', () => {
  pulseCap = 0
})

window.addEventListener('resize', () => {
  canvas.width = canvasContainer.clientWidth
  canvas.height = canvasContainer.clientHeight

  canvasData.x = Math.round(canvas.width / 1.6)
  canvasData.y = Math.round(canvas.height / 2)
})

document.addEventListener('scroll', e => {
  yOffsetTarget = (window.scrollY - maxScrollHeight / 2) * scrollMultiplier
})


// Functions
function animationLoop() {
  requestAnimationFrame(animationLoop)
  
  canvasData.yOffset = Math.round(canvasData.yOffset + (yOffsetTarget - canvasData.yOffset) * 0.7)

  // calculate pulse change
  pulseCap += (1 - pulseCap) * 0.06
  pulseDamp += (pulseCap - pulseDamp) * 0.2
  if(pulseDamp > 0.95) pulseDamp = 1

  // update canvas
  c.clearRect(0, 0, canvas.width, canvas.height)

  for(const side of sideArray) {
    side.update(pulseDamp)
  }

  for(const corner of cornerArray) {
    corner.update(mouse.x, pulseDamp)
  }

  if(!floodFillComplete) {
    for(let i = 0; i < 2; i++) {
      floodFillStep(hexArray, sideArray)
    }
  }

}

function generateNew() {
  hexArray = []
  cornerArray = []
  sideArray = []

  resetFloodFill()

  generateShapes(hexArray, cornerArray)
}

function init() {
  // set canvas size, react has a little delay when loading content, so the size has to be recalculated after that.
  canvas.width = canvasContainer.clientWidth
  canvas.height = canvasContainer.clientHeight

  canvasData.x = Math.round(canvas.width / 1.6)
  canvasData.y = Math.round(canvas.height / 2)
  canvasData.width = canvas.width
  canvasData.height = canvas.height

  maxScrollHeight = document.body.scrollHeight - window.innerHeight
  yOffsetTarget = (window.scrollY - maxScrollHeight / 2) * scrollMultiplier
  canvasData.yOffset = (window.scrollY - maxScrollHeight / 2) * scrollMultiplier

  generateNew()

  animationLoop()
}

if(canvas) {
  setTimeout(init, 500)
}