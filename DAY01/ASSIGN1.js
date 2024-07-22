//1
var v = 74;
console.log("printing the value of " + v);

let s = "tharun";
console.log("printing the value of " + s);

console.log(
  "**********************************************************************************"
);

//2
const is_final_year = false;
console.log("printing the value of " + is_final_year);

console.log(
  "**********************************************************************************"
);

//3
let num = 10;
let yy = 123e5; // 12300000
let zz = 123e-5; // 0.00123

console.log("Type of num: " + typeof num);

let str = "Hello World!";

console.log("Type of str: " + typeof str);

let objj = { name: "tharun", age: 19 };

console.log("Type of obj: " + typeof obj);

let bool1 = true;

console.log("Type of bool: " + typeof bool1);

let arr = [1, 2, 3, 9.01, "day1", str, objj, num, bool1];

console.log("Type of arr: " + typeof arr);

console.log("Value of arr: " + arr);

console.log("Length of arr: " + arr.length);

let x = 16 + 4 + "left to right executution";

let y = "left to right executution" + 16 + 4;

console.log("x: " + x);
console.log("y: " + y);

console.log(
  "**********************************************************************************"
);

//4
let vv = 22;
console.log("vv: " + vv);
vv = 23;
console.log("vv: " + vv);

let v1 = 45;
let v2 = v1;
v2 = "string";
v1 = 54;
console.log("v1: " + v1);
console.log("v2: " + v2);

//5
const v3 = 13;
// v3 = 14;
//error

console.log(
  "**********************************************************************************"
);

let numberVar = 42;
console.log(`Value: ${numberVar}, Type: ${typeof numberVar}`);

let stringVar = "Hello, world!";
console.log(`Value: ${stringVar}, Type: ${typeof stringVar}`);

let booleanVar = true;
console.log(`Value: ${booleanVar}, Type: ${typeof booleanVar}`);

let objectVar = { name: "Alice", age: 30 };
console.log(`Value: ${JSON.stringify(objectVar)}, Type: ${typeof objectVar}`);

let arrayVar = [1, 2, 3, 4, 5];
console.log(`Value: ${arrayVar}, Type: ${typeof arrayVar}`);

let functionVar = function () {
  return "function";
};
console.log(`Value: ${functionVar}, Type: ${typeof functionVar}`);

let undefinedVar;
console.log(`Value: ${undefinedVar}, Type: ${typeof undefinedVar}`); // empty doesnot mean undefined value

let nullVar = null;
console.log(`Value: ${nullVar}, Type: ${typeof nullVar}`);

let symbolVar = Symbol("unique");
console.log(`Value: ${symbolVar.toString()}, Type: ${typeof symbolVar}`);

console.log(
  "**********************************************************************************"
);

let letVar = "Initial value";
console.log(`letVar before reassignment: ${letVar}`);
letVar = "Reassigned value";
console.log(`letVar after reassignment: ${letVar}`);

const constVar = "Initial value";
console.log(`constVar before reassignment: ${constVar}`);

try {
  constVar = "Reassigned value";
} catch (error) {
  console.log(`constVar after reassignment attempt: Error - ${error.message}`);
}
