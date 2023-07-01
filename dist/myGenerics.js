"use strict";
//example generic function
//takes argument of any type and returns the same type
//"T" is a type variable
function identity(arg) {
    return arg;
}
//can be called with any type
let output1 = identity("myString"); // type of output1 is string
let output2 = identity(100); // type of output2 is number
//GENERIC CLASSES
//example of a generic class
class GenericNumber {
    constructor(zeroValue, addFunction) {
        this.zeroValue = zeroValue;
        this.add = addFunction;
    }
}
//the class can be used with a number
let myNumber = new GenericNumber(0, function (x, y) { return x + y; });
//or with a string
let myString = new GenericNumber("", function (x, y) { return x + y; });
//GENERICS - CHALLENGE
// 1.
// Create a generic function reverseArray<T>
// that takes an array of elements of type T
// and returns a new array with the elements in reverse order.
// Test this function with arrays of numbers, strings,
// and any other type you want.
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
let numArr = [1, 2, 3, 4, 5];
let strArr = ['a', 'b', 'c', 'd', 'e'];
let boolArr = [true, true, true, false, false];
let revNumArr = reverseArray(numArr);
let revStrArr = reverseArray(strArr);
let revBoolArr = reverseArray(boolArr);
console.log('----------------');
console.log('reverseArrays:');
console.log(revNumArr);
console.log(revStrArr);
console.log(revBoolArr);
console.log('----------------');
// 2. Create a generic class
// KeyValuePair<TKey, TValue> with two properties:
// key of type TKey,
// and value of type TValue.
// Create some instances of this class with different types.
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let kvp1 = new KeyValuePair(1, 'one');
let kvp2 = new KeyValuePair('two', 2);
let kvp3 = new KeyValuePair(true, false);
console.log('----------------');
console.log('key value pairs:');
console.log(kvp1);
console.log(kvp2);
console.log(kvp3);
console.log('----------------');
