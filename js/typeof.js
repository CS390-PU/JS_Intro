var value = 10,
  name = "Ally",
  person = {
    firstName: "Sally",
    lastName: "Rogers"
  },
  scores = [100, 90, 80];

console.log(typeof value);
console.log(typeof name);
console.log(typeof person);
console.log(typeof scores);
console.log(typeof person.firstName);

console.log(person.firstName + ' ' + person.lastName);
console.log(name + value + value);
console.log(value + value + name);
console.log(value + name + scores + person);
console.log(value * scores);
