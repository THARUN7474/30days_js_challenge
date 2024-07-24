function throwError() {
  throw new Error("This is an intentional error!");
}

try {
  throwError();
} catch (er) {
  console.error("Caught an error:", er.message);
}

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Denominator cannot be zero!");
  }
  return a / b;
}

console.log(
  "************************************************************************************************"
);

try {
  console.log(divideNumbers(10, 2));
  console.log(divideNumbers(10, 0));
} catch (error) {
  console.error("Caught an error:", error.message);
}

try {
  console.log("This is the try block.");
  throw new Error("An error occurred!");
} catch (error) {
  console.error("Caught an error in the catch block:", error.message);
} finally {
  console.log("This is the finally block.");
}

console.log(
  "************************************************************************************************"
);

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error!");
}

try {
  throwCustomError();
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (!input) {
    throw new ValidationError("Input cannot be empty!");
  }
  return true;
}

try {
  validateInput("Hello"); // true
  validateInput(""); // Error
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

console.log(
  "************************************************************************************************"
);

let randomPromise = new Promise((resolve, reject) => {
  let randomValue = Math.random();
  if (randomValue > 0.5) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Caught an error:", error);
  });

async function handleRandomPromise() {
  let randomPromise = new Promise((resolve, reject) => {
    let randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  });

  try {
    let result = await randomPromise;
    console.log(result);
  } catch (error) {
    console.error("Caught an error:", error);
  }
}

handleRandomPromise();

console.log("****************************************************************");

fetch("https://invalidurl.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });

async function fetchData() {
  try {
    let response = await fetch("https://invalidurl.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

fetchData();
