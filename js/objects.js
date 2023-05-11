const obj1 = {
  property1: 10,
  2: 20,
  "property 3": 30
};

console.log (obj1.property1);
console.log (obj1[2]);
console.log (obj1["property 3"]);

let cond = true;
let x;
if (cond) {
  x = { greeting: "hi there" };
}
console.log (x.greeting);

const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
console.log (myHonda.engine.cylinders);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  return year;
}
const myCar = new Car("Eagle", "Talon TSi", 1993);
console.log (myCar.make);
console.log (Car ("1", "2", 3), make);
console.log (make);