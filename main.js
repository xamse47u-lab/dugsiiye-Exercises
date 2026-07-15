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

let temperature = 15;

if (temperature < 0) {
  console.log("very cold");
} else if (temperature >= 0 && temperature < 15) {
  console.log("cold");
} else if (temperature >= 15 && temperature <= 25) {
  console.log("warm");
} else {
  console.log("hot");
}
