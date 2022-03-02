// TYPE 1-modul
// class Khamid {}
// const first = new Khamid ()
// ANNOTATIONS 2-modul
var age = 19;
var myName = "Abdulkhamid";
var isMarried = false;
var not = null;
var undf = undefined;
var timeCreated = new Date();
//  ANY
var unknown = false;
unknown = "Me";
// Parameter type annotation
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("Mark");
// Return Type Annotations
function getType(age, firstName) {
    return firstName + " " + age;
}
getType(19, "Abdulkhamid");
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// Optional Properties
function printName(obj) {
    console.log(obj);
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
function info(obj) {
    var _a;
    // Error - might crash if 'obj.last' wasn't provided!
    //   console.log(obj.last.toUpperCase());
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
info({ first: "Abdulkhamid" });
info({ first: "Abdulkhamid", last: "Bolbekov" });
// Defining a Union Type
function printBoth(id) {
    console.log("Your id is ".concat(id));
}
printBoth(63);
printBoth("sixty-three");
// console.log(id.toUpperCase());
// Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
//  SOLUTIONS
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
printId(63);
printId("sixty-three");
