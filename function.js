/*

 Function

*/

function getMyName(name) {
  var getName = name;
  console.log(getName);
}

getMyName("Hasan");
getMyName("Another Name?");


//basic function
function addition(a, b) {
  var addNum = a + b;
  console.log(addNum);
}

addition(10, 20)


//global scope & functions

var globalNum = 100;

function checkGlobal() {
  globalNum = 1000;
  console.log(globalNum);

  var checkOut = "I will not be in the outside";
}
checkGlobal();
console.log(globalNum);
//console.log(checkOut)  //gives error becaude checkOut is not accessible from outside of the function


//return

function multiplication(a, b) {
  return console.log(a * b)
}

multiplication(5, 6)

//stand in line

function nextInLine(arr, num) {
  arr = arr;
  arr.push(num);
  arr.shift();
}

var testArray = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArray));
nextInLine(testArray, 6);
console.log("After: " + JSON.stringify(testArray));


if (5 == '5') {
  console.log("true");
}
if (5 === '5') {
  console.log("true");
}else{
  console.log("false");
}