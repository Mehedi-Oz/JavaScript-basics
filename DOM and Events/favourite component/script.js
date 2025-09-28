'use strict';

/* 

// DOM Manipulation Methods
const newTitle = document.querySelector('#main-heading');
newTitle.style.color = 'gray';
// newTitle.style.fontSize = "5rem";
console.log(newTitle);


// getElementById()
const title = document.getElementById('main-heading');
console.log('title', title);


// getElementsByClassName()
const listItem = document.getElementsByClassName("list-item");
console.log('listItem', listItem);


// getElementsByTagName()
const tagName = document.getElementsByTagName('li');
console.log('tagName', tagName);


// querySelector()
const container = document.querySelector('div');
console.log('container', container);

// querySelectorAll()
const wholeContainer = document.querySelectorAll('div');
console.log('wholeContainer', wholeContainer);


const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
  item.style.fontSize = '2rem';
});


//innerText-textContent-innerHTML

const firstListItem = document.querySelector('.list-item');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML); 


//checking attributes
const title = document.querySelector("#main-heading");
console.log(title.getAttribute('id'));



//createElement
const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li)
li.innerHTML = "SSD"; //adding new li tag
li.setAttribute('id', 'main-heading'); //setting attributes to the li tag
li.removeAttribute('id'); //removing attributes from the li tag

li.classList.add('list-item');
li.classList.remove('list-item');

console.log(li.classList.contains('list-item'));

li.remove(); //removes newly created li

*/

//parent node traversal

// let span = document.querySelector('span');
// console.log(span);
// console.log(span.parentNode); //At the very top of the DOM tree (or with ), they differ.
// console.log(span.parentElement); //At the very top of the DOM tree (or with ), they differ.

// console.log(html.parentNode); //output: document (the root Document node)
// console.log(html.parentElement); //output: null (because the Document is not an element)

//child node traversal

let body = document.querySelector('body');
console.log(body.childNodes);
console.log(body.firstChild);
console.log(body.lastChild);
