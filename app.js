function reverseString(str) {
  return str.split("").reverse().join("");
}


console.log(reverseString("Aman danish"))

// check even or odd

let num = 20;

if (num % 2 === 0){
    console.log('the number is even')
}else{
    console.log('the number is odd')
}

let array = [1,5,3,6,7,5,4,7]
array.push(8)

console.log(array)

function sumArr(arr){
    let sum = 0

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(sumArr([1,3,4,6,7,5,8,9]))