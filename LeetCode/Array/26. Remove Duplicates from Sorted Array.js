// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;

//   k = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// }

// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;

//   k = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   for (let i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }

//   return k;
// }

// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;

//   let k = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   for (let i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }
//   return k;
// }

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k = removeDuplicates(nums);

// console.log(nums);
// console.log(k);

// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;

//   let k = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   for (let i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }

//   return k;
// }

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k = removeDuplicates(nums);
// console.log(nums);
// console.log(k);

// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;

//   let k = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   for (let i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }
//   return k;
// }

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k = removeDuplicates(nums);
// console.log(nums);
// console.log(k);

// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;

//   let k = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   for (i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }
//   return k;
// }

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k = removeDuplicates(nums);
// console.log(nums);
// console.log(k);

// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;

//   let k = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   for (let i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }
//   return k;
// }

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k = removeDuplicates(nums);
// console.log(nums);
// console.log(k);

// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;
//   let k = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   for (let i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }
//   return k;
// }

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k = removeDuplicates(nums);

// console.log(nums);
// console.log(k);

// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;
//   let k = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   for (let i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }
//   return k;
// }

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k = removeDuplicates(nums);

// console.log(nums);
// console.log(k);

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  for (let i = k; i < nums.length; i++) {
    nums[i] = "_";
  }
  return k;
}
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);

console.log(nums);
console.log(k);
