console.log("Welcome to Employee wage")
const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20
const NUM_OF_WORKING_DAYS = 10
let empHrs = 0;

function getWorkHrs(empCheck) {

    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    console.log(empCheck);
    empHrs += getWorkHrs(empCheck);
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Working Hours = " + empHrs + "\nEmployee Wage = " + empWage);