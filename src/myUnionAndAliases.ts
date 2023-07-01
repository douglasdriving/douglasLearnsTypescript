// Create a type alias for a union type of string, number, and boolean,
// and use it in a function that accepts a parameter of that type.

type stringNumOrBool = string | number | boolean;

function printType(arg: stringNumOrBool) {
  console.log(typeof arg);
}

printType(1);
printType('a');
printType(true);

// Create a type alias for a complex type,
// like an object type or a function type.

type person = {
  name: string,
  age: number,
  isAlive: boolean
}

let myPerson: person = {
  name: 'John',
  age: 30,
  isAlive: true
}

type TwoNumbersIntoOne = (x: number, y: number) => number;

let add: TwoNumbersIntoOne = (x, y) => x + y;
let subtract: TwoNumbersIntoOne = (x, y) => x - y;
let multiply: TwoNumbersIntoOne = (x, y) => x * y;
let divide: TwoNumbersIntoOne = (x, y) => x / y;

// Create an interface and a type alias for the same structure,
// and understand the differences between them.

interface CarInterface {
  color: string,
  model: string,
  year: number
}

type CarType = {
  color: string,
  model: string,
  year: number
}

let myCar: CarInterface = {
  color: 'red',
  model: 'Ford',
  year: 2000
}

let myCar2: CarType = {
  color: 'blue',
  model: 'Toyota',
  year: 2010
}