// HOF and Callback
// Rest and spread
// try and catch
// promises and at the end a small MCQs Games

// Spread and rest ...

// function sumone(x,y)
// {
//     return x+y;
// }

// let vari = [9,7];
// console.log(sumone(...vari)); //Spread

// Rest
// function sum(...args)  //Rest of data
// {
//     console.log(args);
//     let sum = 0;
//     for(const x of args)
//     {
//         sum = sum + x;
//     }
//     return sum;
// }

// console.log(sum(1,2,3,4,5,6,7,8,9,0));

// Try and Catch

//Syntax
// try{
//     let first_name = "aayush";
//     console.log(first_name + "" + lastname);
// }

// catch(err)
// {
//     console.log("Variable name missing");
// }

// finally
// {
//     console.log("I will run");
// }


// throw => Explore this topic


//  Different types of error we have in JavaScipt

/* 
    - Reference error
    - Syntax error
    - Type error
*/

//  promise
//  - pending
//  - fulfilled
//  - rejected

//  Event Loop

const userOne = () => 
{
    console.log("hello one");
};
const userTwo = () => 
{
    console.log("hello two");
    setTimeout(() => {
        console.log("hello i am inside");
    }, 3000);
};
const userthree = () => 
{
    console.log("hello three");
};

userOne();
userTwo();
userthree();