const ex_promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("I am a resolved promise");
  }, 2000);
});

const ex_promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("I am a rejected promise");
  }, 2000);
});

ex_promise
  .then(function (res_itcanbe_anything) {
    console.log("Promise fulfilled");
    console.log(res_itcanbe_anything);
  })
  .catch(function (err) {
    console.log("Promise rejected: " + err);
  });

ex_promise2
  .then(function (resolve) {
    console.log("Promise fulfilled");
    console.log(resolve);
  })
  .catch((err) => {
    console.log("Promise rejected: " + err);
  });

function fetchData(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

fetchData("Fetching data from server 1", 1000)
  .then((message) => {
    console.log(message);
    return fetchData("Fetching data from server 2", 1000);
  })
  .then((message) => {
    console.log(message);
    return fetchData("Fetching data from server 3", 1000);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

async function waitForPromise() {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved value after 2 seconds in async await block 1!");
    }, 2000);
  });

  let result = await promise;
  console.log(result);
}

waitForPromise();

async function handleRejectedPromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(
        "Promise rejected after 2 seconds in handling usine asunc await 2!"
      );
    }, 2000);
  });

  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

handleRejectedPromise();

// fetch("https://api.publicapis.org/entries")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

async function fetchData() {
  try {
    let response = await fetch("https://api.publicapis.org/entries");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// fetchData();

// let promise1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 1 resolved"), 1000)
// );
// let promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 2 resolved"), 2000)
// );
// let promise3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 3 resolved"), 3000)
// );

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log("Results from Promise.all:", values);
//   })
//   .catch((error) => {
//     console.error("Error in Promise.all:", error);
//   });

let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
let promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);
let promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log("Result from Promise.race:", value);
  })
  .catch((error) => {
    console.error("Error in Promise.race:", error);
  });
