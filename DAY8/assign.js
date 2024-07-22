let name = "Tharun";
let age = 19;
let introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction);

let multilineString = `This is a string
that spans multiple
lines. done using backticks`;
console.log(multilineString);

let numbers = [1, 2, 3, 4, 5];
let [f, s] = numbers;
console.log(`First: ${f}, Second: ${s}`);

let book = { title: "1984", author: "George Orwell", year: 1949 };
let { title, author , a } = book;
console.log(`Title: ${title}, Author: ${author} , ${a}`);

//spread operation
let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];
console.log(newArray);

//rest operation
function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5));



function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2));
console.log(multiply(5)); 




let person = {
    name,
    age,// got from global level 
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person);
person.greet();


let propName = "dynamicProp";
console.log(propName);
let dynamicObject = {
    [propName]: "This is a dynamic property value"
};
console.log(dynamicObject);

console.log(propName);

propName = "tharun_made_prop_now"//say before declaring object only we should give  variable value to use as dynamic property

console.log(propName);

console.log(dynamicObject);
