// 29 05 2024
// Array methods
/*
1 push 
2 pop 
3 shift
4 unshift
5 indexOf 
6 lastIndexOf 
7 reverse 
8 sort
9 Array.isArray
10 concat
11 join


*/
1;
/*

let fruit = ["apple", "banana", "orange", "grapes", "dragon fruit"];
console.log(fruit);
// pop removes last element
lastElement = fruit.pop();
console.log(lastElement);


*/
2;
/*
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(days);
let firstElement = days.shift();
console.log(firstElement);

// shift is used to remove first element in Array
// Shift also return first element of the Array AND indexs will be moved to its lower position
days.unshift("Hero");
console.log(days);
// unshift used to add the elemnets at the begining of array ,by shifting  existing elements to higher indexes

*/
3;

// let numbers = [1, 2, 4, 5, 6, 4, 6, 2, 3, 2];
// console.log(numbers.indexOf(2));
// // return the first occurance of the element in the array (index)
// let index = numbers.lastIndexOf(2);
// console.log(index);

// lastIndexOf() returns the last occurance of the element in an array
7;

// let numbers = [1, 2, 4, 5, 6, 4, 6, 2, 3, 2];
// console.log(numbers.reverse());

// reverses all the elements in array

8;

let fruits = ["orange", "apple", "cherry", "banana"];
console.log(fruits.sort());
let numbers = [1, 2, 4, 6, 3, 6, 0];
console.log(numbers.sort());

// sort is used to arrange the elements in assending order

9;
let name = "chandhu";
console.log(Array.isArray(name));

// checks wheather the value is array or not

10;

let combinedArray = fruits.concat(numbers);
console.log(combinedArray);

// concat is used to two or more arrays creates as new array

let arr = [1, 2, 3, 5, 6, 7, 8, 9];
console.log(arr.includes(2));
console.log(arr.includes(167));
