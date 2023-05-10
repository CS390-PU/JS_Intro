// Primitive Data Types are not objects

// 1. Number
let anInt = 2, aDecimal = 1.5;
console.log(typeof anInt === "number");
console.log(typeof aDecimal === "number");
console.log(typeof anInt === "object");

// 2. String
let aStr = "hi";
console.log(typeof aStr === "string");
console.log(typeof aStr === "object");

// 3. BigInt
let aBigInt1 = BigInt(123456789012345), aBigInt2 = 1n;
console.log(typeof aBigInt1 === "bigint");
console.log(typeof aBigInt1 === "object");
console.log(typeof aBigInt2 === "bigint");
console.log(typeof aBigInt2 === "object");

// 4. Boolean
let aBool = true;
console.log(typeof aBool === "boolean");
console.log(typeof aBool === "object");

// 5. undefined
var anUndefined;
console.log(typeof anUndefined === "undefined");
console.log(typeof aBanUndefinedool === "object");

// 6. Symbol - don't ask right now
let aSymbol = Symbol("Foo");
console.log(typeof aSymbol === "symbol");
console.log(typeof aSymbol === "object");

let aNull = null;
console.log(typeof aNull === "null");
console.log(typeof aNull === "object");