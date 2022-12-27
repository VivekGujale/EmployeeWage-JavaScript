console.log("Welcome to Employee wage")
const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20
const NUM_OF_WORKING_DAYS = 10
const MAX_HOURS_IN_MONTH = 100

let totalEmpHrs = 0
let totalWorkingDays = 0
let totalEmpWage = 0
let dayCounter = 0
let empDailyWageArray = new Array();
let employeeDailyWageMap = new Map();

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

function totalWage(dailyWage) {
    totalEmpWage += dailyWage;
}

function totalWageUsingReduce(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

function mapDayWithDailyWage(dailyWage) {
    dayCounter++;
    return "Day " + dayCounter + " = " + dailyWage;
}

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

function totalDaysWorked(numberOfDays, dailyWage) {
    if (dailyWage > 0)
        return numberOfDays + 1;
    return numberOfDays;
}

while (totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    console.log(empCheck);
    let empHrs = getWorkHrs(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calDailyWage(empHrs));
    employeeDailyWageMap.set(totalWorkingDays, calDailyWage(empHrs));
}


//UC 7A - Calculating Total Employee Wage Using ForEach method.
empDailyWageArray.forEach(totalWage);
console.log("\nTotal Working Days = " + totalWorkingDays + "\nTotal Working Hours = " + totalEmpHrs + "\nTotal Employee Wage = " + totalEmpWage);

//UC 7A - Calculating Total Employee Wage Using Reduce method.
console.log("Employee wage by Reduce method : " + empDailyWageArray.reduce(totalWageUsingReduce, 0));

//UC 7B - Printing days along with daily wage.
let mapDayWithWageArray = empDailyWageArray.map(mapDayWithDailyWage);
console.log("Daily wage Map : ");
console.log(mapDayWithWageArray);

//UC 7C - Show days when full time Wage of 160 is earned
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("Filtering Daily Wage When Full Time i.e 160 Wage Earned : ");
console.log(fullDayWageArray);

//UC 7D - Find first occurence when full time wage was eared using find function
console.log("First Full Time Wage Was Earned On Day : " + mapDayWithWageArray.find(findFullTimeWage));

//UC 7E - Check if every element of full time wage is truely holding full time wage
console.log("Check Full Time Wage Is truly holding Full Time Wage  : " + fullDayWageArray.every(isAllFullTimeWage));

//UC 7F - Check if ther is any Part Time Wages
console.log("Check Is There Any Part Time Wages : " + mapDayWithWageArray.some(isAnyPartTimeWage));

//UC 7G - Find Number of days the Employee Worked
function totalDaysWorked(numberOfDays, dailyWage) {
    if (dailyWage > 0)
        return numberOfDays + 1;
    return numberOfDays;
}
console.log("Number of Days Employee Worked : " + empDailyWageArray.reduce(totalDaysWorked, 0));

//UC8 - Store the day and daily wage along with total wage
console.log(employeeDailyWageMap);
console.log("Total Employee Wage : " + Array.from(employeeDailyWageMap.values()).reduce(totalWageUsingReduce, 0));
