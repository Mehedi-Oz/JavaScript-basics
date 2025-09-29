'use strict';

/* 
---------------------------------------------------------
 DOM Manipulation Methods
---------------------------------------------------------
*/

// querySelector() - select element by CSS selector
const newTitle = document.querySelector('#main-heading');
newTitle.style.color = 'gray';              // change text color
// newTitle.style.fontSize = "5rem";        // example: change font size
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

// querySelector() - first matching element
const container = document.querySelector('div');
console.log('container', container);

// querySelectorAll() - all matching elements
const wholeContainer = document.querySelectorAll('div');
console.log('wholeContainer', wholeContainer);

// querySelectorAll() with forEach
const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
  item.style.fontSize = '2rem';             // set font size for each list item
});

/* 
---------------------------------------------------------
 innerText vs textContent vs innerHTML
---------------------------------------------------------
*/
const firstListItem = document.querySelector('.list-item');

console.log(firstListItem.innerText);       // visible text only
console.log(firstListItem.textContent);     // all text (including hidden)
console.log(firstListItem.innerHTML);       // HTML inside element

/* 
---------------------------------------------------------
 Checking attributes
---------------------------------------------------------
*/
const titleAttr = document.querySelector("#main-heading");
console.log(titleAttr.getAttribute('id'));  // get attribute value

/* 
---------------------------------------------------------
 Creating and manipulating elements
---------------------------------------------------------
*/
const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);                              // append new <li>
li.innerHTML = "SSD";                       // add text inside li
li.setAttribute('id', 'main-heading');      // set attribute
li.removeAttribute('id');                   // remove attribute

li.classList.add('list-item');              // add class
li.classList.remove('list-item');           // remove class

console.log(li.classList.contains('list-item')); // check if class exists

li.remove();                                // remove newly created li

/* 
---------------------------------------------------------
 Parent node traversal
---------------------------------------------------------
*/

// let span = document.querySelector('span');
console.log(span);
console.log(span.parentNode);    // parent node (could be element, document, etc.)
console.log(span.parentElement); // parent element only (null if parent is not an element)

console.log(html.parentNode);    // output: #document (root Document node)
console.log(html.parentElement); // output: null (Document is not an element)

/* 
---------------------------------------------------------
 Child node traversal
---------------------------------------------------------
 - childNodes / firstChild / lastChild → include ALL nodes (elements, text, comments)
 - children / firstElementChild / lastElementChild → only ELEMENT nodes
---------------------------------------------------------
*/
let body = document.querySelector('body');

console.log(body.childNodes);             // NodeList of all child nodes
console.log(body.firstChild);             // first child node (could be text)
console.log(body.lastChild);              // last child node (could be text)

console.log(body.children);               // HTMLCollection of child elements only
console.log(body.firstElementChild);      // first child element
console.log(body.lastElementChild);       // last child element

body.childNodes[1].style.backgroundColor = 'cyan';  // example: style a specific child node

/* 
---------------------------------------------------------
 Sibling node traversal
---------------------------------------------------------
*/
let ulElement = document.querySelector('ul');
const div = document.querySelector('div');

console.log(ulElement.childNodes);          // all child nodes of <ul>
console.log(ulElement.previousSibling);     // previous sibling node (could be text/comment)
console.log(ulElement.nextSibling);         // next sibling node (could be text/comment)

console.log(ulElement.previousElementSibling); // previous sibling element only
console.log(ulElement.nextElementSibling);     // next sibling element only