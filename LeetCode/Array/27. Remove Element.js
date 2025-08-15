// function removeElement(nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   for (let i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }
//   return k;
// }

// nums = [1,2,12,1,2,6,4,7,8]
// val = 2

// console.log(removeElement(nums,val));

// console.log(nums);

// function removeElement(nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   for (let i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }
//   return k;
// }
// let nums = [1, 2, 2, 1, 2, 6, 4, 7, 8];
// let val = 2;

// console.log(removeElement(nums, val));
// console.log(nums);

// function removeElement(nums, val) {
//   let k = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       k++;
//     }
//   }

//   for (i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }
//   return k;
// }

// let nums = [1, 2, 12, 1, 2, 6, 4, 7, 8, 2, 2];
// let val = 2;

// console.log(removeElement(nums, val));
// console.log(nums);

// function removeElement(nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   for (let i = k; i < nums.length; i++) {
//     nums[i] = "_";
//   }

//   return k;
// }

// let nums = [3, 2, 2, 3];
// let val = 3;
// let k = removeElement(nums, val);

// console.log(nums); // [2, 2, "_", "_"]
// console.log(k);    // 2

function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  for (let i = k; i < nums.length; i++) {
    nums[i] = "_";
  }

  return k;
}
let nums = [3, 2, 2, 3];
let val = 3;
let k = removeElement(nums, val);
console.log(nums); // [2, 2, "_", "_"]
console.log(k); // 2
