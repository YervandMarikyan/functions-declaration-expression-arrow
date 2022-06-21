"use strict";

// 1․ Ամեն ֆունկցիայից ստեղծում եք 5 հատ (5 declaration, 5 expression, 5 arrow)
// 2. Ֆունկցիաները իրենց մեջ պետք է պարունակեն լոգիկաներ (ցանկացած միջին բարդության)

    // Declaration 1
function oddOrEven(number) {
    if(number % 2 === 0) {
        console.log(`The number ${number} is even`);
    } else {
        console.log(`The number ${number} is odd`);
    }
}
oddOrEven(12);
console.log("------------------");

    // Declaration 2
function printArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`In the ${i} index is number ${arr[i]}`);
    }

}
printArray([14, 75, 5, 32, 99]);
console.log("------------------");

    // Declaration 3
function findMinValue(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
const array = [25, 33, 99, 45, 14, 83, 4, 76, 1];
console.log(`In this array: ${array}\n The min value is: ${findMinValue(array)}`);
console.log("------------------");

    // Declaration 4
function findMaxValue(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(`In this array: ${array}\n The max value is: ${findMaxValue(array)}`);
console.log("------------------");

    // Declaration 5
function sumOfArrayNumbers(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(`In this array: ${array}\n The sum of numbers is: ${sumOfArrayNumbers(array)}`);
console.log("------------------");


    // Expression 1
const findAverageValue = function (array) {
    let sum = sumOfArrayNumbers(array);
    let average = sum / array.length;

    return average;
}
console.log(`In this array: ${array}\n The average number is: ${findAverageValue(array)}`);
console.log("------------------");

    // Expression 2
const factorial = function (number) {
    let fact = 1;
    for(let i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`Factorial of number ${number} is: ${fact}`);
}
factorial(5);
console.log("------------------");

    // Expression 3
const mergeArrays = function (arr1, arr2) {
    const newArr = [];
    let counter = 0;
    for(let i = 0; i < arr1.length; i++) {
        newArr[i] =arr1[i];
        counter++;
    }
    for(let i = 0; i < arr2.length; i++) {
        newArr[counter] =arr2[i];
        counter++;
    }
    return newArr;

}
const a1 = [11, 44, 77, 85, 3];
const a2 = [45, 2, 17, 64, 99, 71, 24];
console.log(mergeArrays(a1, a2));
console.log("------------------");

    // Expression 4
const printEmoloyeesInfo = function (obj) {
    let info = "";
    for(let i = 0; i < obj.employees.length; i++) {
        info += `The employee with name: "${obj.employees[i].name}" is "${obj.employees[i].age}" years old\n`;
    }
    
    return info;
}
const progOffise = {
    employees: [
        {name: "Joe Jones", age: 24},
        {name: "Bill William", age: 35},
        {name: "kevin Bond", age: 28}
    ]
};
console.log(printEmoloyeesInfo(progOffise));
console.log("------------------");

    // Expression 5  
const checkNum = function (num) {
    
    if(num < 18) {
        return `You have no right to drive a car`;
    } else if (num >= 18 && num < 80) {
        return `Please provide your driver's license`;        
    } else {
        return `How do you feel? \nPlease provide your driver's license`;
    }
}
const numForCheck = 17;
console.log(checkNum(numForCheck));
console.log("------------------");

    // Arrow 1  
const arrow1 = (num1, num2) => {
    return num1 + num2;
}
console.log(arrow1(20, 15));
console.log("------------------");

    // Arrow 2
const arrow2 = (num1, num2) => {
    return num1 * num1 + num2 * num2;
}
console.log(arrow2(10, 15));
console.log("------------------");

    // Arrow 3
const arrow3 = (num) => {
    if(num < 0) {
        console.log(`The num ${num} is negative`);
    } else {
        console.log(`The num ${num} is positive`);
    }
}
arrow3(-20);
console.log("------------------");

    // Arrow 4
const arrow4 = (s1, s2) => `${s1} ${s2}`;
let str1 = "Hello";
let str2 = "World";
console.log(arrow4(str1, str2));
console.log("------------------");

    // Arrow 5
const arrow5 = (arg1, arg2) => {
    if(arg1 === arg2) {
        return true;
    } else {
        return false;
    }
}
let param1 = 1;
let param2 = true;
console.log(arrow5(param1, param2));
console.log("------------------");


// 3․ Ֆունկցիաներից մեկում պետք է օգտագործեք 3 հատ return (էդ ասը դասից հանած ա)
function checkType(arg) {
    if(typeof(arg) === "number") {
        return "Number";
    } else if(typeof(arg) === "string") {
        return "String";
    } else {
        return "It can be boolean or something else";
    }
}
let testType = true;
console.log(checkType(testType));
console.log("------------------");


// 4․ ստեղծել առանձին ֆունկցիա date անունով, ու էդ ֆուկցիան կանչել mig ֆունկցիայի 
// մեջ ու էնպես անել որ 2 ֆունկցիաներն էլ աշխատեն
function date(s) {
    console.log(`${s} Function date is working`);
}

function mig(str) {    
    date(str);
    console.log(`${str} Function mig is working`);
}
mig("Hello");

