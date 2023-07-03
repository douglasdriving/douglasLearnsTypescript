//this was initially a JS file, and was converted to TS

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

const user1: User = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  email: "john.doe@example.com"
};

function getFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

console.log(getFullName(user1));
