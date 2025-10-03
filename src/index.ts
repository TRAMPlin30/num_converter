import { InputNumber } from "./InputNumber"

const reader = new InputNumber();
var number = reader.numberList("Enter number: ")
console.log(`the number is: ${number}`)
