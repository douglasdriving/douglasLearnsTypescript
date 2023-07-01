//example generic function
//takes argument of any type and returns the same type
//"T" is a type variable
function identity<T>(arg: T): T {
  return arg;
}

//can be called with any type
let output1 = identity<string>("myString");  // type of output1 is string
let output2 = identity<number>(100);  // type of output2 is number

//GENERIC CLASSES
//example of a generic class
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, addFunction: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = addFunction;
  }
}
//the class can be used with a number
let myNumber = new GenericNumber<number>(
  0,
  function (x, y) { return x + y; }
);
//or with a string
let myString = new GenericNumber<string>(
  "",
  function (x, y) { return x + y; }
);

//GENERICS - CHALLENGE

// 1.
// Create a generic function reverseArray<T>
// that takes an array of elements of type T
// and returns a new array with the elements in reverse order.
// Test this function with arrays of numbers, strings,
// and any other type you want.

function reverseArray<T>(arr: T[]): T[] {
  let newArr: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: string[] = ['a', 'b', 'c', 'd', 'e'];
let boolArr: boolean[] = [true, true, true, false, false];
let revNumArr: number[] = reverseArray<number>(numArr);
let revStrArr: string[] = reverseArray<string>(strArr);
let revBoolArr: boolean[] = reverseArray<boolean>(boolArr);

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

class KeyValuePair<TKey, TValue> {

  private key: TKey;
  private value: TValue;

  constructor(key: TKey, value: TValue) {
    this.key = key;
    this.value = value;
  }

}

let kvp1: KeyValuePair<number, string> = new KeyValuePair<number, string>(1, 'one');
let kvp2: KeyValuePair<string, number> = new KeyValuePair<string, number>('two', 2);
let kvp3: KeyValuePair<boolean, boolean> = new KeyValuePair<boolean, boolean>(true, false);
console.log('----------------');
console.log('key value pairs:');
console.log(kvp1);
console.log(kvp2);
console.log(kvp3);
console.log('----------------');