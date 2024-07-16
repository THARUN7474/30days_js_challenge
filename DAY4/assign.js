// Activity 1: For Loop

// Task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  console.log("**********************************************************************************");
  
  // Task 2
  let number = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
  
  console.log("**********************************************************************************");
  
  // Activity 2: While Loop
  
  // Task 3
  let sum = 0;
  let i = 1;
  while (i <= 10) {
    sum += i;
    i++;
  }
  console.log("Sum of numbers from 1 to 10: " + sum);
  
  console.log("**********************************************************************************");
  
  // Task 4
  let j = 10;
  while (j >= 1) {
    console.log(j);
    j--;
  }
  
  console.log("**********************************************************************************");
  
  // Activity 3: Do...While Loop
  
  // Task 5
  let k = 1;
  do {
    console.log(k);
    k++;
  } while (k <= 5);
  
  console.log("**********************************************************************************");
  
  // Task 6
  let num = 5;
  let factorial = 1;
  let l = 1;
  do {
    factorial *= l;
    l++;
  } while (l <= num);
  console.log("Factorial of " + num + " is " + factorial);
  
  console.log("**********************************************************************************");
  
  // Activity 4: Nested Loops
  
  // Task 7
  let pattern = '';
  for (let m = 1; m <= 5; m++) {
    for (let n = 1; n <= m; n++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  console.log(pattern);
  
  console.log("**********************************************************************************");
  
  // Activity 5: Loop Control Statements
  
  // Task 8
  for (let p = 1; p <= 10; p++) {
    if (p === 5) continue;
    console.log(p);
  }
  
  console.log("**********************************************************************************");
  
  // Task 9
  for (let q = 1; q <= 10; q++) {
    if (q === 7) break;
    console.log(q);
  }
  
  console.log("**********************************************************************************");
  
  // Feature Request Scripts
  
  // Number Printing Script
  console.log("Using For Loop:");
  for (let r = 1; r <= 10; r++) {
    console.log(r);
  }
  
  console.log("Using While Loop:");
  let s = 1;
  while (s <= 10) {
    console.log(s);
    s++;
  }
  
  console.log("**********************************************************************************");
  
  // Multiplication Table Script
  let numTable = 5;
  for (let t = 1; t <= 10; t++) {
    console.log(`${numTable} * ${t} = ${numTable * t}`);
  }
  
  console.log("**********************************************************************************");
  
  // Pattern Printing Script
  let pattern2 = '';
  for (let u = 1; u <= 5; u++) {
    for (let v = 1; v <= u; v++) {
      pattern2 += '* ';
    }
    pattern2 += '\n';
  }
  console.log(pattern2);
  
  console.log("**********************************************************************************");
  
  // Sum Calculation Script
  let sumCalc = 0;
  let w = 1;
  while (w <= 10) {
    sumCalc += w;
    w++;
  }
  console.log("Sum of numbers from 1 to 10: " + sumCalc);
  
  console.log("**********************************************************************************");
  
  // Factorial Calculation Script
  let factorialNum = 5;
  let factorialCalc = 1;
  let x = 1;
  do {
    factorialCalc *= x;
    x++;
  } while (x <= factorialNum);
  console.log("Factorial of " + factorialNum + " is " + factorialCalc);
  
  console.log("**********************************************************************************");
  