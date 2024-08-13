let x = 2;
let y = 3;
let z = x + y;
console.log("add:", z);
console.log("times:", x * y);
console.log("modulus:", y % x);
console.log("divide:", x / y);
console.log(x > y);

let a = 5;
let b = "5";
console.log(a === b);
console.log(a + b);
console.log(a + b === 55 ? "Good" : "Bad");

document.getElementById("welcome").innerHTML = "Hello world";
document.getElementById("press").value = "Good morning";
document.querySelector(".demo").innerHTML = "Hello world";

// DATATYPE

let c = 4;
let d = true;
const age = "2";
console.log(typeof c);
console.log(typeof d);
console.log(typeof age);

const data = [2, 5, 9, 6, 4];
console.log(data[2]);
console.log(typeof(data));

const student = [
  { name: "Ade", age: 7, school: "OIC", gender: "male" },
  { name: "Tola", age: 23, school: "OIC", gender: "Female" },
  { name: "titi", age: 4, school: "OIC", gender: "male" },
  { name: "Adesola", age: 3, school: "OIC", gender: "Female" },
];
console.log(student[3]);
console.log(student[1].gender);


function showMessage() {
  alert("Good morning sir")
}
showMessage()

function add(a, b) {
  return a + b
}

console.log(add(3,6));

const votersEligibility = function () {
  let age = 12;
  if(age >= 18) {
    console.log('You are eligible to vote');
  }

  else{
    console.log('you are not eligible to vote');
  }

}
votersEligibility()

const calulateAge = function (birthyear) {
  return 2024 - birthyear 
}
console.log(calculateAge(2000))


const calAges =birthyear => 2024 - birthyear
console.log(calAgesn(2007));

const times = (d, c) => d * c 
console.log(times(7,9));


const checkGrade = function() {
  if{grade.value}
}














