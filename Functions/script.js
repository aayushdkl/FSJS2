//Topic : Functions
// function sum(value1,value2) //function definition
// {
//     let num1=18;
//     let num2 = 25;

//     console.log('Addition of two numbers is',value1+value2);
// }

// sum(52,61); // calling of function
// sum(10,11);
// sum(30,67);

//Normal function and function with parameters


//Function with return type

// function sum(val1,val2){
//     let result = val1 + val2;
//     return result;

// }
// function sum2(val1,val2){
//     let result = val1 - val2;
//     return result;

// }
// function sum3(val1,val2){
//     let result = val1 * val2;
//     return result;

// }
// function sum4(val1,val2){
//     let result = val1 / val2;
//     return result;

// }

// let add1= sum(10,54);
// console.log(add1);

// let add2= sum2(10,54);
// console.log(add2);

// let add3= sum3(10,54);
// console.log(add3);

// let add4= sum4(10,54);
// console.log(add4);

//Above is a code for calculator

//String.
// function URL(url,domain)
// {
//     let con = "https://";
//     let result = con + url + domain;
//     return result;
// }

// let aayushsite = URL("aayushdhakal",". me");
// console.log(aayushsite);


//function to calculate sum of array
function sum(arr)
{
   let sum = 0,i;
   for (i =0; i<arr.length; i++)
   { 
    sum = sum +i;
   }
   return sum;
}

let sumarray = [1,2,3,4,5,6,7,8,9,0];
let result = sum(sumarray);
console.log(result);