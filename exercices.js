

//given an array of numbers, return the sum of all the elements

const input = [1,2,3,4,5];
// input[-1] or input[5]
const classicForLoopSum = (arr) => {
    
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }

    return sum;
}

function forOfSum(arr) {
    let sum = 0;

    // let num = arr[i]
    for(const num of arr){
       
        //sum = sum + num
        sum += num
    }

    return sum;
}


const forInSum = (obj) => {
    let sum = 0;

    for(const property in obj){

        sum += obj[property]
    }

    return sum;
}

const objInput = { a: 1, b: 2, c: 3, d: 4, e: 5}

console.log("The classic sum is", classicForLoopSum(input))
console.log("The for of sum is", forOfSum(input))
console.log("The for in sum is", forInSum(objInput))