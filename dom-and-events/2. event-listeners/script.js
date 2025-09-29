'use strict';

// ---------------------------------------------------------
// DOM MANIPULATION - EVENT LISTENERS
// ---------------------------------------------------------

// Click Event
const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
  alert("This is a popup too!");
}

buttonTwo.addEventListener("click", alertBtn);


// Mouseover Event
const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = 'cyan';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);