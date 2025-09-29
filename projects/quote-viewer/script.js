'use strict';

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: `"Indeed, with hardship comes ease."`,
    person: "Qur’an"
  },
  {
    quote: `"The strong man is the one who controls himself when angry."`,
    person: "Muhammad ﷺ"
  },
  {
    quote: `"Knowledge enlivens the soul."`,
    person: "Ali"
  },
  {
    quote: `"Do not grieve over what has passed unless it makes you work for what is about to come."`,
    person: "Umar"
  },
  {
    quote: `"The best among you are those who have the best manners and character."`,
    person: "Muhammad ﷺ"
  },
  {
    quote: `"Do not waste water even if you were at a running stream."`,
    person: "Muhammad ﷺ"
  },
  {
    quote: `"Fear Allah wherever you are, and follow up a bad deed with a good one which will wipe it out."`,
    person: "Tirmidhi"
  },
  {
    quote: `"The world is a prison for the believer and a paradise for the disbeliever."`,
    person: "Muhammad ﷺ"
  },
  {
    quote: `"Do not speak unless your speech is beneficial, and do not remain silent unless your silence is wise."`,
    person: "Shafi’i"
  },
  {
    quote: `"Patience is of two kinds: patience over what pains you, and patience against what you covet."`,
    person: "Ali"
  }

];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})