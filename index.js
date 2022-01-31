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
    return firstName + age;
}
