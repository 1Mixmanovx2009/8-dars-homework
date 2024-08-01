// ----------------1-rasim------------


// -----------1-misol------------

// const arr = [1, 2, 7, 65, 8, 9, 6, 43];
// console.log(arr.sort((a, b) => a - b))


// ----------------2-misol---------------

// function num(a, b) {
//   const arr = [1, 6, 9, 5, 8, 10, 15];
// let newArr = arr.slice(a, b);

// let sum = 0;
// newArr.forEach((i) => {
    //   sum += i;
// });
// console.log(sum);  
// }
// num(2, 5)


// --------------3-misol---------------

// let numbers = [2, 4, 5, 6, 6, 3, 2, 1]
// let num = []
// numbers.forEach(function(value) {
//     if (!num.includes(value)) {
//         num.push (value)
//         console.log(value);
//     }
// })


// ---------------4-misol--------------

// let arr = [1, 2, 3, 4, 5, 6]

// let max = Math.max(...arr);

// let min = Math.min(...arr);

// console.log(`Eng katta qiymat: ${max}`);
// console.log(`Eng kichik qiymat: ${min}`);


// -------------5-misol------------

// let arr = [1, 2, 3, 4, 5];

// arr.reverse();

// console.log(arr); 



// -----------------2-rasim-------------


// ---------------1-misol---------------

// const arr = [55, 3, 2, 11, 3, 4, 6, 7, 12];

// arr.sort((a, b) => a - b);

// console.log(arr);


// ----------------2-misol---------------

// function rangeSum(arr, start, end) {
//     if (start < 0 || end >= arr.length || start > end) {
//       throw new Error('Invalid indices');
//     }

//     return arr.slice(start, end + 1).reduce((sum, num) => sum + num, 0);
//   }

//   const arr = [1, 6, 9, 5, 8, 10, 15];
//   const result = rangeSum(arr, 2, 5);

//   console.log(result); 


// ------------------3-misol------------

// let numbers = [2, 4, 5, 6, 6, 3, 2, 1]
// let num = []
// numbers.forEach(function(value) {
//     if (!num.includes(value)) {
//         num.push (value)
//         console.log(value);
//     }
// })

// -------------------4-misol--------------

// let arr = [1, 2, 3, 4, 5, 6]

// let max = Math.max(...arr);

// let min = Math.min(...arr);

// console.log(`Eng katta qiymat: ${max}`);
// console.log(`Eng kichik qiymat: ${min}`);


// -----------------6-misol--------------

// let arr = [1, 2, 3, 4, 5];

// arr.reverse();

// console.log(arr); 


// ---------------7-misol------------

// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];

// let oddNumbers = arr.filter(num => num % 2 !== 0);

// oddNumbers.forEach(num => console.log(num));

// console.log('Number of odd numbers:', oddNumbers.length);


// ---------------8-misol--------------

// let arr = [2, 3, 4, 5, 7];

// let oddIndexElements = arr.filter((_, index) => index % 2 !== 0);

// console.log(oddIndexElements);


// ----------------9-misol----------------

// function findMaxOddIndexValue(arr) {
//     const oddIndexValues = arr.filter((_, index) => index % 2 !== 0);

//     if (oddIndexValues.length === 0) {
//       return undefined; 


//     return Math.max(...oddIndexValues);
//   }

//   const array = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
//   const maxOddIndexValue = findMaxOddIndexValue(array);

//   console.log('Eng katta toq indeks qiymati:', maxOddIndexValue);


// ------------------10-misol------------

// function zeroOutBetweenMinMax(arr) {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);

//     const maxIndex = arr.indexOf(max);
//     const minIndex = arr.indexOf(min);

//     const startIndex = Math.min(maxIndex, minIndex);
//     const endIndex = Math.max(maxIndex, minIndex);

//     for (let i = startIndex + 1; i < endIndex; i++) {
//       arr[i] = 0;
//     }

//     return arr;
//   }

//   const array = [2, 1, 3, 8, 4];
//   const result = zeroOutBetweenMinMax(array);

//   console.log('Natija:', result);


// -------------------11-misol---------------

// function generateOddNumbers(n) {
//     let result = [];
//     let current = 1;
    
//     for (let i = 0; i < n; i++) {
//         result.push(current);
//         current += 2; 
//     }
    
//     return result;
// }

// const n = 5;
// const oddNumbersArray = generateOddNumbers(n);

// console.log('Dastlabki', n, 'ta toq sonlardan tashkil topgan array:', oddNumbersArray);


// ----------------12-misol----------------

// function reverseArray(arr) {
//     const reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversed.push(arr[i]);
//     }
//     return reversed;
//   }
  
//   const array = [22, 3, 5, 6, 3, 2, 3];
//   const reversedArray = reverseArray(array);
  
//   console.log('Teskari tartibdagi array:', reversedArray);
  

// ------------------13-masala------------------

// function uniqueSortedArray(arr) {
//     const uniqueValues = [];
    
//     for (const value of arr) {
//       if (!uniqueValues.includes(value)) {
//         uniqueValues.push(value);
//       }
//     }
    
//     return uniqueValues.sort((a, b) => a - b);
//   }
  
//   const input = [3, 5, 6, 3, 2, 3];
//   const output = uniqueSortedArray(input);
  
//   console.log('Unique va tartiblangan array:', output);
  

// ------------------14-misol------------------

// function minValueAtEvenIndices(arr) {
//     const evenIndexValues = arr.filter((_, index) => index % 2 === 0);
    
//     return Math.min(...evenIndexValues);
//   }
  
//   const input = [22, 3, 5, 6, 3, 2, 7, 8];
//   const minEvenIndexValue = minValueAtEvenIndices(input);
  
//   console.log('Juft indekslardagi eng kichik qiymat:', minEvenIndexValue);
  