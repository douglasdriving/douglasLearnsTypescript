function greet(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old!`;
}

console.log(greet("John", 30));

function square(num: number): number {
  return num * num;
}

let squareOfTwo: number = square(2);
let squareOfFive: number = square(5);
console.log(squareOfTwo, squareOfFive);