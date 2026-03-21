function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Aman danish"));

// check even or odd

let num = 20;

if (num % 2 === 0) {
  console.log("the number is even");
} else {
  console.log("the number is odd");
}

let array = [1, 5, 3, 6, 7, 5, 4, 7];
array.push(8);

console.log(array);

function sumArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArr([1, 3, 4, 6, 7, 5, 8, 9]));

function largeNumArr(a) {
  let add = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > add) add = a[i];
  }
  return add;
}
console.log(largeNumArr([1, 2, 3, 4, 5, 6, 7, 7, 8, 84]));

// let largeArray = [2,3,5,6,8,6,4,3]

// console.log(largeArray.max())

function ispalamdrom(word) {
  let checkword = word.split("").reverse().join("");
  return word === checkword;
}

console.log(ispalamdrom("madam"));

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

console.log(randomColor());

function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5]));

function simulateAsyncTask() {
  console.log("Task started");
  setTimeout(() => {
    console.log("Task finished");
  }, 2000);
}
simulateAsyncTask();

function simulateMultipleTasks() {
  setTimeout(() => {
    console.log("Task 1 finished");
  }, 1000);

  setTimeout(() => {
    console.log("Task 2 finished");
  }, 2000);

  setTimeout(() => {
    console.log("Task 3 finished");
  });
}

simulateMultipleTasks();

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = "Fetched data";
    callback(data);
  });
}
fetchDataWithCallback();


