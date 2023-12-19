//HOF => Higher Order Function
// CALLBACK
//When a function is calling a function

//Higher order functions are functions which take other functions as a parameter or return a funciton as a value.
// The function passed as a parameter is called callback.

// function a() {
//   console.log("I was called by a function");
// }

// function b() {
//   a();
// }

// b();

//mini program
// const callback =(n) => {
//     return n ** 2;
// };

// function cube(callback,n){
//     return callback(n) * n;
// }

// console.log(cube(callback,2));

// For each() is HOF , the () => {} inside it is callback

// const arr = ["hey","hi","hello","hola","namaste"];

// arr.forEach((val)=>{
//     console.log(val)
// });

// function myfunc(val)
// {
//     console.log(val);
// }

// SetTimeOuT

// setTimeout(() => {
//     console.log("Hello FSJS 2");
// }, 3000);

// setInterval(() => {
//     console.log("`😁`");
// }, 1000);

// ForEACH
// map
// filter
// reduce
// find
// some
// sort

//map
// const numbers = [1,2,3,4,5,6];
// const numSqu = numbers.map((num)=>num*num);

// console.log(numSqu);

// const count = [
//     "India",
//     "Pakistan",
//     "Canada",
//     "Ireland",
//     "Japan",
//     "Kenya",
//     "Finland",
//     "Germany",
//     "Srilanka",
//     "Bharat",
// ];

// const store = count.filter((val) => val.includes("land"));
// console.log(store);

// Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// const num = [1, 2, 3, 4, 5, 6, 7];
// const sum = num.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


//Sort

// const names = ['anurag','anirudh','hitesh','vyom','bishal','mayur','snehal','momin','surya',];
// console.log(names.sort());
// console.log(names.reverse());

// Destructurin