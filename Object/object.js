// const object = {
//     rocket : '🚀',
//     home : '🏡',
// }

// for (k in object )
// {
//     console.log(object[k]);
//     console.log(k);
// }

//string, number, bigint, boolean, null , undefine, symbol

// const obj1 = {
//     rocket : '🚀',
//     fuel : 2, 
//     config : {
//         name : 'mars'
//     },
// };

// obj1.fuel =200
// obj1['year'] = 2000


//part 2 

// const obj2 = new Object () //constructor
// obj2.redbook = '📕'
// obj2.myValue = '1 blue book'
// console.log(obj2);


//part 3
// const powers = {
//     fly: true,
//     cordinate: Math.random() + 2
// }

// const obj3 = Object.create(powers)

// console.log(obj3);
// console.log(obj3.cordinate);
// console.log(Object.getPrototypeOf(obj3));

//part 4
// const obj4 = Object.create({})
// obj4.name = 'ayush';
// console.log(obj4);

// const obj4 = Object.create({})
//y Object.definePropert(obj4, 'book' , {
//     // icon: '📕',
//     get: () => '📕',
//     //homework: set: 
//     enumerable: true
// })

// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));


// for (k in obj4){
//     console.log('value is',k);
// }


//part 5
const obj5={
    comics : 'marvel',
    pen : '',
    printComic: () => {

    }
}