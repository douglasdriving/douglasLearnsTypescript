interface Person0 {
  name: string;
  age: number;
}

interface Employee0 {
  jobTitle: string;
}

//this type combines the person and employee interfaces
type EmployeePerson = Person0 & Employee0;

//this object literal must have all properties from both interfaces
//so both name, age, and jobTitle are required
let douglas: EmployeePerson = {
  name: "Douglas",
  age: 28,
  jobTitle: "Developer"
};