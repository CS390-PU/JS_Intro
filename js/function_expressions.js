// function declaration where function is hoisted
function sum1 (total, num) {
  console.log(total, num);
  return total + num;
}

// function expression is not hoisted
// sum2 is assigned an anonymous (nameless) function
const sum2 = function (total, num) {
  return total + num;
}

const sum3 = (total, num) => total + num;

console.log(sum1(1, 2));
console.log([1, 3, 5].reduce(sum1));
console.log(sum2(1, 2));
console.log([1, 3, 5].reduce(sum2));
console.log(sum3(1,2));
console.log([1, 3, 5].reduce(sum3));
