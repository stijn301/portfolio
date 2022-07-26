"use strict"
// Interpolate colors

// Imports / Exports
export { interpolateColor, getBloomColor }


// Declarations

// Background colors
let baseCol = {
  r: 50,
  g: 150,
  b: 110
}

let highlightCol = {
  r: 255,
  g: 255,
  b: 255
}

let bloomCol = {
  r: 40,
  g: 240,
  b: 130, 
  a: 0.12
}


// Functions
function interpolateColor(t) {
  return `rgb(${lerp(highlightCol.r, baseCol.r, t)}, ${lerp(highlightCol.g, baseCol.g, t)}, ${lerp(highlightCol.b, baseCol.b, t)})`
}

function getBloomColor() {
  return `rgba(${bloomCol.r}, ${bloomCol.g}, ${bloomCol.b}, ${bloomCol.a})`
}

function lerp(start, end, t) {
  return (start + (end - start) * t)
}