console.log("Welcome to Employee wage")
const IS_ABSENT = 0
let employeeCheck = Math.floor(Math.random() * 10) % 2
console.log(employeeCheck);
if (employeeCheck == IS_ABSENT)
    console.log("Employee is Absent")
else
    console.log("Employee is Present")