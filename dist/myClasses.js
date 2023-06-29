"use strict";
//learn to work with classes in TS!
//private and protected members
class Person {
    constructor(name, ssn) {
        this.name = name;
        this.socialSecurityNumber = ssn;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    getSSN() {
        return this.socialSecurityNumber;
    }
}
let john = new Person("John Doe", "123-45-6789");
console.log(john.name); // OK
john.introduce(); // OK
class Car {
    move(distance) {
        console.log(`The car moved ${distance} meters.`);
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
let rect = new Rectangle(5, 10);
let area = rect.area();
let perimeter = rect.perimeter();
console.log(`Area: ${area}, Perimeter: ${perimeter}`);
//class inheritence
//create an Animal class, and extend it into a snake class
class Animal {
    constructor(name) {
        this.distanceMoved = 0;
        this.name = name;
    }
    move(distance) {
        this.distanceMoved += distance;
        console.log(`${this.name} moved ${distance} meters.`, `Total distance moved is ${this.distanceMoved} meters.`);
    }
}
class Snake extends Animal {
    slither(distance) {
        console.log(this.name, 'started slithering!');
        this.move(distance);
    }
}
let sam = new Snake('Sammy the Python');
sam.slither(5);
sam.slither(19);
//Accessors
//challenge
class Employee extends Person {
    constructor(name, ssn, jobTitle) {
        super(name, ssn);
        this.jobTitle = jobTitle;
    }
    introduceSelf() {
        console.log(`Hello, my name is ${this.name} and I am a ${this.jobTitle}.`);
    }
}
let John = new Employee("John Doe", "123-45-6789", "developer");
console.log('----------------');
console.log('Employee');
console.log('Name:', John.name);
console.log('Job Title:', John.jobTitle);
console.log('----------------');
//bank account class
class BankAccount {
    constructor() {
        this._balance = 0;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount >= 0)
            this._balance = amount;
        else
            console.error('ERROR: cant set balance to a negative number!');
    }
    printBalance() {
        console.log('-----');
        console.log('Current balance:');
        console.log(this.balance);
        console.log('-----');
    }
}
let douglasBankAccount = new BankAccount();
douglasBankAccount.balance = 1000;
douglasBankAccount.printBalance();
douglasBankAccount.balance = -1000;
