
//define the structure of the object
interface Point {
  x: number,
  y: number
}

//then use the structure to define an object
let myPoint: Point = { x: 10, y: 20 };

//let wrongPoint: Point = { x: 10, z: 15 };
// Error: Object literal may only specify known properties,
// and 'z' does not exist in type 'Point'.

//challenge: create a person interface
interface Human {
  firstName: string,
  lastName: string,
  age: number,
  isAlive: boolean,
}

let myHuman: Human = {
  firstName: "Douglas",
  lastName: "Driving",
  age: 28,
  isAlive: true,
}

console.log(myHuman.firstName);