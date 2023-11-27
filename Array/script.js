//Arrays in depth and for of loop

// let names = ['aayush','john','eminem','taylor','bipul'];
// console.log(names);

// //Properties of array.
// //1. Length of array
// console.log(names.length);

// //2.
// console.log(names[3]);

// //3. last value of array when you dont know the length
// console.log(names[names.length - 1]);

// names[4] = "vinay";
// console.log(names);


//another way to declare array but not recommended
// let names = new Array ("Name 1","Name 2"); 
// console.log(names);

//Push => Insert new value inside the Array at the end
// names.push('VYOM');
// console.log(names);


//Slice
// let names = ['aayush','john','eminem','taylor','bipul'];
// console.log(names.slice(1,4)); //esma chai pahilo index included xa...meaning 1,4 ko 1 wala value ma vako chai print hunxa but paxadi ko chai exclusive meaning 4 vnda agadi smma ko print hunxa


//to print from john to bipul
// console.log(names.slice(1,5));

//Splice 
// let fruit = ["Apple",'bada apple','chota apple','double apple'];
// fruit.splice(2,1,'kharab apple','acha apple');//2 means start inserting from this index and 1 means remove 1 from this
// console.log(fruit);

//Concatenation
// let arr1 = [1,2,3,4];
// let arr2 = [4,5,6,7];
// let arr3 = [6,7,6,7];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2,arr3));


//fill ==> Homework
// let arr4 = [1,2,3,4,5,6,7,8,9];
// arr4.fill('Anurag','Anirudh',2,4);
// console.log(arr4);


//includes
// let num =[1,2,3,4,5,6,7,8];
// console.log(num.includes(7,6));  // 7 is the value i have to find out and 6 is the index to check........basically 6th index ma 7 xa ki xaina check grni

//indexof

// let num =[1,2,3,4,5,6,7,8];
// console.log(num.indexOf(5));  //Kun index ma xa vnni kura dinxa

// isArray()
// let num =[1,2,3,4,5,6,7,8];
// let num2 = 6;
// console.log(Array.isArray(num));
// console.log(Array.isArray(num2));


























