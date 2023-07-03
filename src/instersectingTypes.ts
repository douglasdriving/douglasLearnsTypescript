interface Person0 {
  name: string;
  age: number;
}

interface Employee0 {
  jobTitle: string;
}

type EmployeePerson = Person0 & Employee0;

let douglas: EmployeePerson = {
  name: "Douglas",
  age: 28,
  jobTitle: "Developer"
};