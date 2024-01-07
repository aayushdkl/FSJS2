//Map, filter and reduce
// primise and fetch api
//weather app

//map => interate over array and perform an action on each item
//filter => iterate over array and filter out the element
//reduce => single value


//map
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const res = numbers.map((val)=>val * val);
// console.log(res);

//filter
// const names = ["ayush","suresh","naresh","umesh","prabesh","rupesh","rajesh","dinesh"];
// const res = names.filter((val)=> val.includes("esh"));
// console.log(res);

//reduce
// const numbers = [1,2,3,4,5,6,7,8,9];
// const res = numbers.reduce((acc,num)=>acc + num,5);
// console.log(res);

//Promise
// const makePromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const arrone = ["html","css","javascript","tailwind"];
//         if(arrone.length>0)
//         {
//             resolve("completed");
//         }
//         else
//         {
//             reject("incomplete");
//         }
//     },2000 );
// });

// makePromise.then((result)=>{
//     console.log(result);
// })
// .catch((result)=>{
//     console.log(result);
// });

// Fetch API
const url = "https://restcountries.com/v2/all"; //countries
fetch(url)
.then((response)=> response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));
