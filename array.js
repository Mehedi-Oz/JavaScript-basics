/*

 Array

*/

myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray)

var myData = myArray[0];
console.log(myData)

myArray[0] = 100;
console.log(myArray)

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(myArray[1][1])

myArray.push(["Hello", "World"]);
console.log(myArray)

myArray.pop()
console.log(myArray)

myArray.shift();
console.log(myArray)

myArray.unshift(['unshifted', 'element'])
console.log(myArray)