import isTypeOf from "./isTypeOf.js";

const stringValue = "Hello";
const numberValue = 12;
const booleanValue = true;
const arrayValue = [1, 2, 3];

console.log(isTypeOf(stringValue, "string"));
console.log(isTypeOf(numberValue, "number"));
console.log(isTypeOf(booleanValue, "boolean"));
console.log(isTypeOf(arrayValue, "array"));
