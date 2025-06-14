// 1. Sum of numbers from 1 to N
// Write a function sumUpTo(n) that returns the sum of all numbers from 1 to n.
// sumUpTo(5); // 1 + 2 + 3 + 4 + 5 = 15

let sumUpTo = function (n) {
    let sum = 0;
    let numbers = [];
    for(let i = 1; i <= n; i++){
        numbers.push(i);
        sum += i
    }
    let formula = numbers.join(' + ');
    return `${formula} = ${sum}`;
};

//console.log(sumUpTo(5));

// 2. Count even numbers in an array
// Write a function countEvens(arr) that returns how many even numbers are in the array.
// countEvens([1, 2, 3, 4, 5, 6]); // 3

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);
// let arrPos = 3;
// let arrEven = [];

// if(arr[arrPos]%2==0){
//     arrEven.push(arr[arrPos]);
// }
// console.log(arrEven);


let countEvens = function (arr){
    let arrPos = 0;
    let arrEven = [];
    for(i = 0; i<=arr.length; i++){
        if(arr[arrPos]%2==0){
            arrEven.push(arr[arrPos]);
        }
        arrPos++;
    } 
    return arrEven.length;
}

// console.log(countEvens([1,2,3,4,5,6]));

