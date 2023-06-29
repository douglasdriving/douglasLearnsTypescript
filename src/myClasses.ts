//learn to work with classes in TS!

//private and protected members
class Person {
  private socialSecurityNumber: string;  // Private member, can only be accessed within the class

  constructor(public name: string, ssn: string) {
    this.socialSecurityNumber = ssn;
  }

  public introduce() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  protected getSSN() {  // Protected member, can be accessed within the class and subclasses
    return this.socialSecurityNumber;
  }
}

let john = new Person("John Doe", "123-45-6789");
console.log(john.name);  // OK
john.introduce();  // OK
// console.log(john.getSSN());  // Error: Property 'getSSN' is protected and only accessible within class 'Person' and its subclasses.
// console.log(john.socialSecurityNumber);  // Error: Property 'socialSecurityNumber' is private and only accessible within class 'Person'.

//implement interfaces in a class
interface Movable {
  move(distance: number): void;
}

class Car implements Movable { //must implement a movable interface
  move(distance: number) {
    console.log(`The car moved ${distance} meters.`);
  }
}

//challenge
//work with classes and interfaces
//create a class called Rectangle that implements the Shape interface
interface Shape {
  area(): number;
  perimeter(): number;
}

class Rectangle implements Shape {

  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }

}

let rect: Rectangle = new Rectangle(5, 10);
let area: number = rect.area();
let perimeter: number = rect.perimeter();
console.log(`Area: ${area}, Perimeter: ${perimeter}`);

//class inheritence
//create an Animal class, and extend it into a snake class
class Animal {
  public name: string;
  private distanceMoved: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  public move(distance: number) {
    this.distanceMoved += distance;
    console.log(
      `${this.name} moved ${distance} meters.`,
      `Total distance moved is ${this.distanceMoved} meters.`
    );
  }
}

class Snake extends Animal {
  public slither(distance: number) {
    console.log(this.name, 'started slithering!');
    this.move(distance);
  }
}

let sam: Snake = new Snake('Sammy the Python');
sam.slither(5);
sam.slither(19);

//Accessors
//challenge
class Employee extends Person {
  public jobTitle: string;

  constructor(name: string, ssn: string, jobTitle: string) {
    super(name, ssn);
    this.jobTitle = jobTitle;
  }

  public introduceSelf() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.jobTitle}.`);
  }
}

let John: Employee = new Employee("John Doe", "123-45-6789", "developer");
console.log('----------------');
console.log('Employee');
console.log('Name:', John.name);
console.log('Job Title:', John.jobTitle);
console.log('----------------');

//bank account class
class BankAccount {
  private _balance: number = 0;

  public get balance(): number {
    return this._balance;
  }

  public set balance(amount: number) {
    if (amount >= 0) this._balance = amount;
    else console.error('ERROR: cant set balance to a negative number!');
  }

  public printBalance() {
    console.log('-----');
    console.log('Current balance:');
    console.log(this.balance);
    console.log('-----');
  }
}
let douglasBankAccount: BankAccount = new BankAccount();
douglasBankAccount.balance = 1000;
douglasBankAccount.printBalance();
douglasBankAccount.balance = -1000;