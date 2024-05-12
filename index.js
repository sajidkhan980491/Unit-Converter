/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let VolumeEl = document.getElementById("Volume-el")
let MassEl = document.getElementById("Mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
      let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | `
     lengthEl.textContent += `${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meter`
    
    
    VolumeEl.textContent =`${baseValue} liter  = ${(baseValue * literToGallon).toFixed(3)} gallon | `
    VolumeEl.textContent +=`${baseValue} gallon = ${(baseValue / literToGallon).toFixed(3)} liter`
    
    MassEl.textContent = `${baseValue} Kilo = ${(baseValue * kiloToPound).toFixed(3)} Pound | `
    MassEl.textContent += `${baseValue} pound = ${(baseValue / kiloToPound).toFixed(3)} kilo`
    
   
})







