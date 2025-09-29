'use strict';

// ===============================
//  DOM MANIPULATION: EVENT PROPAGATION
// =============================== 

// Window (capturing)
window.addEventListener("click", function () {
    console.log('Window');
},);

// Document (capturing)
document.addEventListener("click", function () {
    console.log('Document');
},);

// DIV 2 (capturing)
document.querySelector(".div2").addEventListener("click",
    // function () {
    function (e) {
        e.stopPropagation();
        console.log('DIV 2');
    },);

// DIV 1 (capturing)
document.querySelector(".div1").addEventListener("click", function () {
    console.log('DIV 1');
},true);

// Button (capturing, logs event object)
document.querySelector("button").addEventListener("click", function (e) {
    console.log(e.target.innerText = 'clicked!');
},true);


