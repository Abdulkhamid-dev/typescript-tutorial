import axios from "axios";
const BasicUrl = "https://jsonplaceholder.typicode.com/users/1";

// TYPE 1-modul
// class Khamid {}
// const first = new Khamid ()


//  ANY
let unknown: any = false;
unknown = "Me";

// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("Mark");

// Return Type Annotations
function getType(age: number, firstName: string): any {
  return firstName + " " + age;
}
getType(19, "Abdulkhamid");

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Optional Properties

function printName(obj: { first: string; last?: string }) {
  console.log(obj);
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function info(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  //   console.log(obj.last.toUpperCase());
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

info({ first: "Abdulkhamid" });
info({ first: "Abdulkhamid", last: "Bolbekov" });

// Defining a Union Type

function printBoth(id: number | string) {
  console.log(`Your id is ${id}`);
}
printBoth(63);
printBoth("sixty-three");
// console.log(id.toUpperCase());
// Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.

//  SOLUTIONS

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
printId(63);
printId("sixty-three");

interface User {
  name: string;
  email: string;
  id: number;
}

const logger = (id: number, name: string, email: string) => {
  console.log(`
  My id: ${id}
  My name is ${name}
  My email: ${email}
  `);
  
}

const getUsers = () => {
  axios.get(BasicUrl).then((res) => {
    const user = res.data as User;
    const id = user.id;
    const name = user.name;
    const email = user.email;
    logger(id, name, email);
  });
};

getUsers();
