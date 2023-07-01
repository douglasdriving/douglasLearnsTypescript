"use strict";
// Create a type alias for a union type of string, number, and boolean,
// and use it in a function that accepts a parameter of that type.
function printType(arg) {
    console.log(typeof arg);
}
printType(1);
printType('a');
printType(true);
let myPerson = {
    name: 'John',
    age: 30,
    isAlive: true
};
let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;
let myCar = {
    color: 'red',
    model: 'Ford',
    year: 2000
};
let myCar2 = {
    color: 'blue',
    model: 'Toyota',
    year: 2010
};
