let groceries = ["rice", "broccoli", "fish"];

for (i = 0; i < groceries.length; i++) {
  console.log (groceries[i]);
}

for (item of groceries) {
  console.log (item);
}
console.log (item);

groceries.forEach (function (item, index) {
  console.log ("[" + index + "] = " + item);
})

groceries.forEach ((item, index) => {
  console.log ("[" + index + "] = " + item);
})
