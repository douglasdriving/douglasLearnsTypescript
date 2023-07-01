"use strict";
//----------------------------------------------
//"any" types can be used when you simply dont know
//it removes the ts benefits, and revert to js
let unsure = 4;
unsure = "maybe a string instead";
unsure = false; // okay, definitely a boolean
let str = unsure; // no error, but str's type is still any
//----------------------------------------------
//unknown is better than any
let dontKnow = 4;
dontKnow = "maybe a string instead";
dontKnow = false;
// let str: string = dontKnow;
// Error: Type 'unknown' is not assignable to type 'string'.
//----------------------------------------------
// CHALLENGES
//----------------------------------------------
//1. Create a function that takes in an any parameter and logs its type.
function logType(value) {
    console.log(typeof value);
}
console.log('------------------');
console.log('Logging types');
logType(1);
logType("a");
logType(true);
console.log('------------------');
//2. Create a function that takes in an unknown parameter
//and tries to assign it to other typed variables.
function assignValues(value) {
    if (typeof value === "string") {
        let str = value;
        console.log('Its a string: ', str);
    }
    if (typeof value === "number") {
        let num = value;
        console.log('Its a number: ', num);
    }
    if (typeof value === "boolean") {
        let bool = value;
        console.log('Its a boolean: ', bool);
    }
}
console.log('------------------');
console.log('Assigning values');
assignValues(1);
assignValues("a");
assignValues(true);
console.log('------------------');
