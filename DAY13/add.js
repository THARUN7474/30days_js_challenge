export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

export const person = {
    name: 'tharun',
    age: 19,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

