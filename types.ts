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