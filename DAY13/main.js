import { add,subtract} from "./add.js";
import { person } from "./person.js";
import multiply from "./multiply.js";
import * as constants from './constants.js';

const result = add(2, 3);
console.log(result);

const result2 = subtract(2, 3);
console.log(result2);

console.log(person.name);
person.greet();

console.log(multiply(4, 5));



console.log(constants.PI);
console.log(constants.circleArea(5));
console.log(constants.squareArea(4));

import _ from 'lodash';

const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse(array.slice()); 
console.log(reversedArray); 


import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });



    // Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
    // Using Webpack:
    
    // Install Webpack and Webpack CLI:
    
    // sh
    // Copy code
    // npm install --save-dev webpack webpack-cli
    // Create webpack.config.js:
    
    // javascript
    // Copy code
    // const path = require('path');
    
    // module.exports = {
    //     entry: './main.js',
    //     output: {
    //         filename: 'bundle.js',
    //         path: path.resolve(__dirname, 'dist')
    //     },
    //     mode: 'development'
    // };
    // Create the main script (main.js):
    
    // javascript
    // Copy code
    // import multiply from './multiply.js';
    // import { add, subtract } from './math.js';
    
    // console.log(multiply(4, 5)); // Output: 20
    // console.log(add(5, 3)); // Output: 8
    // console.log(subtract(5, 3)); // Output: 2
    // Run Webpack:
    
    // sh
    // Copy code
    // npx webpack
    // Webpack will bundle the JavaScript files and output bundle.js in the dist folder.
    
    // These tasks provide a comprehensive introduction to working with JavaScript modules, including creating, exporting, importing, and bundling modules using Webpack.
    
    
    
    
    
    
    