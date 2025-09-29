'use strict';

// ===============================
// DOM MANIPULATION: EVENT DELEGATION
// ===============================

// ✅ Event delegation allows attaching a SINGLE event listener to a parent element.
// This listener can handle events for all current and future child elements that match a condition.
// It's efficient and scalable, especially for dynamic lists or large DOM trees.

document.querySelector('#sports').addEventListener('click', function (e) {

  console.log(e.target.getAttribute('id') + ' is clicked!');

  const target = e.target;

  if (target.matches('li')) {

    target.style.backgroundColor = 'lightgray';
  }
});

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);


/* 
// ===============================
// DIRECT EVENT LISTENERS (NOT RECOMMENDED FOR SCALABILITY)
// ===============================


document.querySelector('#football').addEventListener('click', function (e) {
  console.log('football was clicked!');
  const target = e.target;
  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgray';
  }
});

document.querySelector('#basketball').addEventListener('click', function (e) {
  console.log('basketball was clicked!');
  const target = e.target;
  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgray';
  }
});

document.querySelector('#boxing').addEventListener('click', function (e) {
  console.log('boxing was clicked!');
  const target = e.target;
  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgray';
  }
});

document.querySelector('#tennis').addEventListener('click', function (e) {
  console.log('tennis was clicked!');
  const target = e.target;
  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgray';
  }
});

document.querySelector('#golf').addEventListener('click', function (e) {
  console.log('golf was clicked!');
  const target = e.target;
  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgray';
  }
});
*/