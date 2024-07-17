function even_odd(a) {
  if (a % 2 === 0) {
    console.log(a + " is an even number");
  } else {
    console.log(a + " is an odd number");
  }
}

function sq_num(num) {
  return num * num;
}

const square_of_number = (num) => num * num;
const square_of_number2 = (num) => {
  console.log(`square_of_number ${num} is ${num * num}`);
};

even_odd(5);
even_odd(10);

console.log(square_of_number(5));

square_of_number2(5);

let ans = sq_num(10);

console.log("square_of_number 10 is" + ans);

console.log(
  "**********************************************************************************"
);

const max_min = (a, b) => {
  console.log("the max and min is" + (a > b) ? a : b);
};

const max_min2 = (a, b) => {
  let max = a > b ? a : b;
  let min = a < b ? a : b;
  console.log("the max and min is" + max + " and " + min);
};

const concatinate_strings = function (str1, str2) {
  return str1 + str2;
};

const concatinate_strings2 = (str1, str2) => {
  console.log(`concatenated string is ${str1}${str2}`);
};

max_min(10, 5);

max_min2(10, 5);

console.log(concatinate_strings("Hello", " World"));

concatinate_strings2("Hello", " World");

console.log(
  "**********************************************************************************"
);

const sum = (a, b) => a + b;
console.log(`Sum of 4 and 5: ${sum(4, 5)}`);

const containsCharacter = (str, char) => str.includes(char);
console.log(`Does 'Hello' contain 'e'? ${containsCharacter("Hello", "e")}`);
console.log(`Does 'Hello' contain 'a'? ${containsCharacter("Hello", "a")}`);

console.log(
  "**********************************************************************************"
);

const coustom_multi = function (a, b = 1) {
  return a * b;
};

const coustom_multi2 = (a, b = 1) => {
  return a * b;
};

console.log(`Custom multiplication: ${coustom_multi(5, 3)}`);
console.log(`Custom multiplication: ${coustom_multi2(10)}`);

function greet(name, age = 30) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(greet("Alice", 25));
console.log(greet("Bob"));

console.log(
  "**********************************************************************************"
);

function repeatFunction(func, t) {
  for (let i = 0; i < t; i++) {
    func();
  }
}
repeatFunction(() => console.log("Hello!"), 3);

const fun2 = (f1, f2, v) => {
  console.log("Calling f1 with " + v);
  console.log("Calling f2 with result of f1");
  console.log(f1(v));
  console.log(f1(v));
  return f2(f1(v));
};

console.log(fun2(Math.random, Math.random, 20));

const inc = (a) => a + 1;
const inc2 = (a) => a + 2;

let ans2 = fun2(inc, inc2, 5);
console.log("the ans is " + ans2);

console.log(
  "**********************************************************************************"
);




// Feature Request Scripts

// Even or Odd Function Script
function isEvenOrOddScript(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
isEvenOrOddScript(10);
isEvenOrOddScript(15);

console.log(
  "**********************************************************************************"
);

// Square Calculation Function Script
function calculateSquare(num) {
  return num * num;
}
console.log(`Square of 6: ${calculateSquare(6)}`);

console.log(
  "**********************************************************************************"
);

// Concatenation Function Script
const concatenate = function (str1, str2) {
  return str1 + str2;
};
console.log(
  `Concatenation of 'Good' and ' Morning': ${concatenate("Good", " Morning")}`
);

console.log(
  "**********************************************************************************"
);

// Sum Calculation Arrow Function Script
const calculateSum = (a, b) => a + b;
console.log(`Sum of 7 and 8: ${calculateSum(7, 8)}`);

console.log(
  "**********************************************************************************"
);

// Higher-Order Function Script
function higherOrderFunction(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}
higherOrderFunction(() => console.log("Executing function"), 2);
