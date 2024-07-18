const arr1 = [1, 2, 3, 4, 5];

console.log(arr1);

console.log(arr1[0] + " " + arr1[arr1.length - 1]);

arr1.push(1, 2);

console.log(arr1);

arr1.pop();

console.log(arr1);

arr1.shift();

arr1.unshift(100);

console.log(arr1);

console.log(arr1.slice(1, 3));

console.log(arr1.splice(1, 1, 10));

console.log(arr1);

console.log(arr1.reverse());

arr2 = arr1.map((a) => a * 2);

console.log(arr2);

arr2.push(11);

console.log(arr2);

arr3 = arr2.filter((a) => a % 2 === 0);

console.log(arr3);

let arr4 = arr3.reduce((acc, num) => acc + num, 0);

console.log(arr4);

console.log(
  "**********************************************************************************"
);

let sum = 0;

for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}

console.log(sum);

arr1.forEach((i) => {
  console.log(i);
});

console.log(
  "**********************************************************************************"
);
const arr = [
  [1, 2, 3],
  [400, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

const flattenedArr = arr.reduce((acc, subArr) => acc.concat(subArr), []);

console.log(flattenedArr);

const sum_flattenedArr = flattenedArr.reduce((accc, a) => accc + a, 0);

console.log(sum_flattenedArr);
console.log("---------")

arr.forEach(function (a) {
  a.forEach(function (b) {
    console.log(b);
  });
});

console.log(arr[1][0]);
