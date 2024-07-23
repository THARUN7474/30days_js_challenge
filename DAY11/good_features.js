 // Creating a promise
 let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to see the rejected state
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise was rejected!");
    }
});

// Handling the promise
myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });


 // Function that returns a promise
 function createPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

// Chaining multiple promises
createPromise("First promise resolved", 1000)
    .then((message) => {
        console.log(message);
        return createPromise("Second promise resolved", 1000);
    })
    .then((message) => {
        console.log(message);
        return createPromise("Third promise resolved", 1000);
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });



// Function that returns a promise
function createPromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (message === "error") {
                reject("Promise rejected!");
            } else {
                resolve(message);
            }
        }, delay);
    });
}

// Async function using try-catch for error handling
async function handlePromises() {
    try {
        let first = await createPromise("First promise resolved", 1000);
        console.log(first);
        let second = await createPromise("Second promise resolved", 1000);
        console.log(second);
        let third = await createPromise("Third promise resolved", 1000);
        console.log(third);
    } catch (error) {
        console.error(error);
    }
}

handlePromises();




// Fetching data using promises
fetch('https://api.publicapis.org/entries')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error fetching data:', error);
});




// Fetching data using async/await
async function fetchData() {
    try {
        let response = await fetch('https://api.publicapis.org/entries');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();



// Using Promise.all to handle multiple promises concurrently
Promise.all([
    createPromise("First promise resolved", 1000),
    createPromise("Second promise resolved", 2000),
    createPromise("Third promise resolved", 3000)
]).then((messages) => {
    console.log('Results from Promise.all:', messages);
}).catch((error) => {
    console.error('Error in Promise.all:', error);
});

// Using Promise.race to handle the first resolved promise
Promise.race([
    createPromise("First promise resolved", 1000),
    createPromise("Second promise resolved", 2000),
    createPromise("Third promise resolved", 3000)
]).then((message) => {
    console.log('Result from Promise.race:', message);
}).catch((error) => {
    console.error('Error in Promise.race:', error);
});