
function sum (number1, number2)
{
    let x = number1;
    let y = number2;

    let result = x+y;

    // console.log(result);

    return result;
} 

function sub (number1, number2)
{
   let x = number1;
   let y = number2;

   let result = x-y;

    return result;
}

function multi (number1, number2)
{
   let x = number1;
   let y = number2;

   let result = x*y;

    return result;
}

function div (number1, number2)
{
   let x = number1;
   let y = number2;

   let result = x/y;

    return result;
}


// console.log (sum (89, 91));

let summation = sum (286, 134);
console.log(summation);

let secondSum = summation + 180
console.log(secondSum);

let thirdSum = sum (71, 69);
console.log(thirdSum);

let subtraction = sub (699, 355);
console.log(subtraction);

let multiplication = multi ( 186, 15);
console.log(summation+multiplication);

let division = div (900, 3);
console.log(division-thirdSum);




