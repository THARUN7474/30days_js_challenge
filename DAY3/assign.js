// Activity 1: If-Else Statements

// Task 1
let number = 10;
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

console.log("**********************************************************************************");

// Task 2
let age = 20;
if (age >= 18) {
  console.log("The person is eligible to vote.");
} else {
  console.log("The person is not eligible to vote.");
}

console.log("**********************************************************************************");

// Activity 2: Nested If-Else Statements

// Task 3
let num1 = 10, num2 = 20, num3 = 15;
if (num1 >= num2 && num1 >= num3) {
  console.log("The largest number is " + num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log("The largest number is " + num2);
} else {
  console.log("The largest number is " + num3);
}

console.log("**********************************************************************************");

// Activity 3: Switch Case

// Task 4
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

console.log("**********************************************************************************");

// Task 5
let score = 85;
let grade;
switch (true) {
  case (score >= 90):
    grade = 'A';
    break;
  case (score >= 80):
    grade = 'B';
    break;
  case (score >= 70):
    grade = 'C';
    break;
  case (score >= 60):
    grade = 'D';
    break;
  default:
    grade = 'F';
}
console.log("Grade: " + grade);

console.log("**********************************************************************************");

// Activity 4: Conditional (Ternary) Operator

// Task 6
let num = 4;
let result = (num % 2 === 0) ? "even" : "odd";
console.log("The number is " + result);

console.log("**********************************************************************************");

// Activity 5: Combining Conditions

// Task 7
let year = 2024;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(year + " is a leap year: " + isLeapYear);

console.log("**********************************************************************************");

// Feature Request Scripts

// Number Check Script
let checkNumber = 0;
if (checkNumber > 0) {
  console.log("The number is positive.");
} else if (checkNumber < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

console.log("**********************************************************************************");

// Voting Eligibility Script
let personAge = 17;
if (personAge >= 18) {
  console.log("The person is eligible to vote.");
} else {
  console.log("The person is not eligible to vote.");
}

console.log("**********************************************************************************");

// Day of the Week Script
let weekDay = 5;
switch (weekDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

console.log("**********************************************************************************");

// Grade Assignment Script
let studentScore = 92;
let studentGrade;
switch (true) {
  case (studentScore >= 90):
    studentGrade = 'A';
    break;
  case (studentScore >= 80):
    studentGrade = 'B';
    break;
  case (studentScore >= 70):
    studentGrade = 'C';
    break;
  case (studentScore >= 60):
    studentGrade = 'D';
    break;
  default:
    studentGrade = 'F';
}
console.log("Student Grade: " + studentGrade);

console.log("**********************************************************************************");

// Leap Year Check Script
let leapYear = 2000;
let checkLeapYear = (leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0);
console.log(leapYear + " is a leap year: " + checkLeapYear);

console.log("**********************************************************************************");
