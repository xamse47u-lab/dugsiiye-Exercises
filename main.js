let car = {
  made: 200,
  model: "toyota",
  year: 2026,
  start: function () {
    console.log("The car has started " + this.model);
  },
};

console.log(car);
car.start();

console.log(car.made);
console.log(car.model);
console.log(car.year);
