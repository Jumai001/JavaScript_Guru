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
