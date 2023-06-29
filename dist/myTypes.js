"use strict";
let isDone = true;
let decimal = 6;
let color = "blue";
let list = [1, 2, 3];
let list2 = [1, 2, 3];
let x = ["hello", 10];
//enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
c = Color.Blue;
//any
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
//void
function warnUser() {
    console.log("This is my warning message");
    return; //returns nothing because its void
}
//null and undefined
let u = undefined;
let n = null;
//never
function error() {
    throw new Error("Something failed");
}
//object
let user;
user = {
    name: "John",
    age: 30
};
