"use strict"


// Background settings, Call generate new shapes

// Imports / Exports
import { generateNew } from "./Canvas.js"
import { setUseBloom } from "./classes/Side.js"
import { setHexSize } from "./ShapeGenerator.js"



// Declarations
const settingsScreen = document.querySelector("#background-settings")
const btnToggleSettingsScreen = document.querySelector("#toggleSettingsScreen")
const settingsMessage = document.querySelector("#settingsMessage")

const settingsHexSize = document.querySelector("#hexSize")
const settingsBloomVfx = document.querySelector("#bloomVfx")
const btnGenerateNew = document.querySelector("#generateNew")



// Event listeners
btnToggleSettingsScreen.addEventListener("click", () => {
  settingsScreen.classList.toggle("is-hidden")

  // Hide the settings message
  if(!settingsMessage.classList.contains("is-hidden")) {
    settingsMessage.classList.add("is-hidden")
  }
})

settingsHexSize.addEventListener("change", e => {
  let newSize = +e.target.value
  if(newSize < 30) newSize = 30
  if(newSize > 50) newSize = 50

  setHexSize(e.target.value)

  e.target.value = newSize
})

settingsBloomVfx.addEventListener("click", e => {
  setUseBloom(e.target.checked)
})

btnGenerateNew.addEventListener("click", () => {
  generateNew()
})

setHexSize(settingsHexSize.value)
setUseBloom(settingsBloomVfx.checked)
