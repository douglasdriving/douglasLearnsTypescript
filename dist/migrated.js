"use strict";
//this was initially a JS file, and was converted to TS
const user1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    email: "john.doe@example.com"
};
function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}
console.log(getFullName(user1));
