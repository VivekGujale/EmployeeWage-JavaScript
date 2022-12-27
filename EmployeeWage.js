console.log("Welcome to Employee wage")
const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20
const NUM_OF_WORKING_DAYS = 10
const MAX_HOURS_IN_MONTH = 100

let empHrs = 0
let totalEmpHrs = 0
let totalWorkingDays = 0
let empDailyWageArray = new Array();

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

function calDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR
}

while (totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    console.log(empCheck);
    totalEmpHrs += getWorkHrs(empCheck);
    empDailyWageArray.push(calDailyWage(empHrs));
}

let totalEmpWage = calDailyWage(totalWorkingDays);
console.log("\nTotal Working Days = " + totalWorkingDays + "\nTotal Working Hours = " + totalEmpHrs +
    "\nTotal Employee Wage = " + totalEmpWage);