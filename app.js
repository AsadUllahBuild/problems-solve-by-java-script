// let number = prompt("Enter the number devisible by 3");
// if(number % 3 == 0) {
//     console.log("the number diviseble by 3");
// }
// else {
//     console.log("Number is not divisible by 3")
// }


// let number = prompt("Enter Your Number");
// if(number % 2 == 0) {
//     console.log("this Number is even")
// }
// else {
//     console.log("this number is odd")
// }


// let age = +prompt("Enter Your age");
// if(age >= 18) {
//     console.log("Old enough")
// }
// else {
//     console.log("to young")
// }


// let nam1 = prompt("Enter Your name");
// if (nam1 === "Asadullah") {
//     console.log("welcome");
//     document.write("welcome");
// }
// else {
//     console.log("data is not match");
//     document.write("data is not match");
// }

// let num1 = +prompt("enter the number")
// switch (0) {
//     case (num1 % 3):
//         console.log("the number is diviseble by 3");
//         break
//     default:
//         console.log("the number is not diviseble by 3")

// }

let num1 = +prompt("Enter Your First Number");
let operator = prompt("Enter Your operator");
let num2 = +prompt("Enter Your Second Number");


if (operator === "+"){
    let sum = num1 + num2
    console.log(sum);
}else if(operator === "-"){
    let subtraction = num1 - num2
    console.log(subtraction);
}else if(operator === "*"){
    let Multiplication = num1 * num2
    console.log(Multiplication);
}else if(operator === "/"){
    let division = num1 / num2
    console.log(division);
}else if(operator === "%"){
    let modulus = num1 % num2
    console.log(modulus);
}
else{
    console .log("please enter the correct values in prompt")
}

