const people = [
  {
    Name: "ahmed",
    Age: 23,
    Id: 231,
  },
  {
    Name: "yiius",
    Age: 37,
    Id: 221,
  },
  {
    Name: "tear",
    Age: 73,
    Id: 423,
  },
];
console.log("\inProperties and values an each person");

for (let person of people) {
  for (let key in person) {
    console.log(key + " :" + person[key]);
  }

  console.log("---------");
}
