/*

 Length

*/

var student = {
  "name": "hasan",
  "age": 10,
  "location": "Dhaka",
  10: "This is value TEN"
}

console.log(student)

//dot notation

var locationValue = student.location;
var nameValue = student.name;
console.log(locationValue, nameValue)

//bracket notation

var nameVal = student["name"];
var ageVal = student["age"];
console.log(nameVal, ageVal);

//accessing object properties with variables

var studentAge = 10;
var AgeOfStudent = student[studentAge];
console.log(AgeOfStudent)

//updating object properties

student.name = "HASAN"
console.log(student)

//adding properties to object

student["first name"] = "Mehedi";
console.log(student);

//delete object
delete student.name;
console.log(student);

//simple object property finder
var myObj = {
  "gift": "bicycle",
  "pet": "cat",
  "phone": "android"
};

function myObjCheck(checkProp) {
  if (myObj[checkProp]) {
    console.log("Found: ", myObj[checkProp]);
  } else {
    console.log("Not found!");
  }
}

myObjCheck("gift")

//manipulating complex objects
