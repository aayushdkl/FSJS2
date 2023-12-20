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
function sum(...args)  //Rest of data
{
    console.log(args);
    let sum = 0;
    for(const x of args)
    {
        sum = sum + x;
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6,7,8,9,0));