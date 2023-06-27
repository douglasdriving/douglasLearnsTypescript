let isDone: boolean = true;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let x: [string, number] = ["hello", 10];

//enums
enum Color { Red, Green, Blue };
let c: Color = Color.Green;
c = Color.Blue;

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

//void
function warnUser(): void {
  console.log("This is my warning message");
  return; //returns nothing because its void
}

//null and undefined
let u: undefined = undefined;
let n: null = null;

//never
function error(): never {
  throw new Error("Something failed");
}

//object
let user: {
  name: string,
  age: number
}
user={
  name: "John",
  age: 30
}