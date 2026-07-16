// const people = [
//   {
//     Name: "ahmed",
//     Age: 23,
//     Id: 231,
//   },
//   {
//     Name: "yiius",
//     Age: 37,
//     Id: 221,
//   },
//   {
//     Name: "tear",
//     Age: 73,
//     Id: 423,
//   },
// ];
// console.log("\inProperties and values an each person");

// for (let person of people) {
//   for (let key in person) {
//     console.log(key + " :" + person[key]);
//   }

//   console.log("---------");
// }

// let score = 100;
// if (score > 50) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// let temperature = 15;

// if (temperature < 0) {
//   console.log("very cold");
// } else if (temperature >= 0 && temperature < 15) {
//   console.log("cold");
// } else if (temperature >= 15 && temperature <= 25) {
//   console.log("warm");
// } else {
//   console.log("hot");
// }

// let grade = 100;

// const message = grade >= 60 ? "passed": "Failed";

// console.log(message);

// const numbers = [1,2,3,4,5];
// numbers.forEach((number) => {
//     console.log("waa number :" + number);

// })
// let list = ["jerry", "ahmed", "Banana"];
// let listLength = list.map((list) => list.length);
// console.log(listLength);

let numbers = [1, 2, 4, 6, 7, 8];
let multiplyNumbers = numbers.reduce(
  (multiplyNumber, total) => multiplyNumber * total,
  1,
);
console.log(multiplyNumbers);
