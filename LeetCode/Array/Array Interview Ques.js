// 1. Logic-based (No built-in .sort() / .map() / .filter())

// Reverse an array in place without using .reverse().

// Find the maximum and minimum elements in an array.

// Find the second largest number in an array.

// Sort an array in ascending/descending order without .sort() (like we just did).

// Remove duplicates from an array without using Set.

// Rotate an array k times (both left and right rotations).

// Merge two sorted arrays into one sorted array without .sort().

// Find the missing number from a sequence of 1 to n.

// Move all zeros to the end of an array.

// Count the frequency of each element in an array.

// Find the intersection and union of two arrays.

// Check if two arrays are equal (same elements in same order).

// Reverse an array in place without using .reverse().

// let arr = [1, 2, 3, 4, 5];

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//   //   let temp = arr[left];
//   //   arr[left] = arr[right];
//   //   arr[right] = temp;

//   [arr[left], arr[right]] = [arr[right], arr[left]];

//   left++;
//   right--;
// }

// console.log(arr);

// Find the maximum and minimum elements in an array.

// let arr = [5, 3, 9, 1, 6, 8];

// let max = arr[0];

// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log(max);
// console.log(min);

// Find the second largest number in an array.

let arr = [10, 5, 8, 12, 7];

let max = -Infinity, secondMax = -Infinity;

for (let num of arr) {
  if (num > max) {
    secondMax = max;
    max = num;
  } else if (num > secondMax && num < max) {
    secondMax = num;
  }
}

console.log(secondMax);
