// Annotations types

let age: number = 19;
let myName: string = "Abdulkhamid";
let isMarried: boolean = false;
let not: null = null;
let undf: undefined = undefined;
let timeCreated: Date = new Date();

// array

const cars: string[] = ["BMW", "TESLA", "RENULT"];
const foundYear: number[] = [1997, 1998, 2001, 2002];
const hasWorking: boolean[] = [true, false];

//  object
const car: { name: string; model: string; founded: number } = {
  name: "BMW",
  model: "M5",
  founded: 2015,
};

// class
class Reactangle {
  height: number;
  width: number;
  constructor(height = 0, width = 0) {
    this.height = height;
    this.width = width;
  }
}
const p = new Reactangle(550, 330);
console.log(p);

// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("World")

//  ANY

// When to use annotations
// 1. Function that returns type ANY
const obj = '{x: 10, y: 8}'
const response: {x: number, y: number} = JSON.parse(obj)

// 2. When we declare variable and initialize veriable later
let isTrue: boolean;
isTrue = false

// 3. Veriable whiche  type can not be inferred
const numArr = [23,15,68,-9]
let hasNegative: boolean | number = false

for (let index = 0; index < numArr.length; index++) {
 if (numArr[index] < 0) {
     hasNegative = numArr[index]
     console.log(hasNegative);
     
 }
}