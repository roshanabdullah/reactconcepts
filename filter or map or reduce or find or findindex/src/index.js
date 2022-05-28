var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const mapNumbers = numbers.map((x) => {
  return x * 2;
});
console.log(mapNumbers);

//Filter - Create a new array by keeping the items that return true.

const greaterThan5 = numbers.filter((x) => {
  return x > 5;
});
console.log(greaterThan5);

//Reduce - Accumulate a value by doing something to each item in an array.

// reduce function is taking current number and adding it into accumulator

const reduceNum = numbers.reduce((accumulator, currentNumber) => {
  console.log("accumolator is " + accumulator);
  console.log("currentNumber " + currentNumber);
  return accumulator + currentNumber;
});
console.log(reduceNum);

//Find - find the first item that matches from an array.

const findNum = numbers.find((num) => {
  return num > 10;
});
console.log(findNum);
//FindIndex - find the index of the first item that matches.

const findIndex = numbers.findIndex((index) => {
  return index > 10;
});
console.log(findIndex);

//cutting down total msg that can be inputted

import emojipedia from "./emojipedia";

console.log(emojipedia);

const totalInputMsg = emojipedia.map((msg) => {
  return msg.meaning.substring(0, 95);
});

console.log(totalInputMsg);
