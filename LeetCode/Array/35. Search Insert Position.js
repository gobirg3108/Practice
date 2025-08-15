let nums = [1, 2, 4, 5, 8, 10];
let target = 4;

// function searchInsert(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     // mid = floor((left + right) / 2)
//     let mid = (left + right) >> 1;

//     if (nums[mid] === target) {
//       return mid; // Target found
//     } else if (nums[mid] < target) {
//       left = mid + 1; // Search right half
//     } else {
//       right = mid - 1; // Search left half
//     }
//   }

//   // If not found, left is the insert position
//   return left;
// }

// console.log(searchInsert(nums,target));

// function searchInsert(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = (left + right) >> 1;

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       right = mid + 1;
//     } else {
//       left = mid - 1;
//     }
//   }
//   return left
// }

// console.log(searchInsert(nums,target));

// function searchInsert(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = (left + right) >> 1;

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       right = mid + 1;
//     } else {
//       left = mid - 1;
//     }
//   }
//   return left
// }

// console.log(searchInsert(nums,target));

// function searchInsert(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = (left + right) >> 1;
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return left;

// }

// console.log(searchInsert(nums,target));

// function searchInsert(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = (left+right) >> 1

//     if (nums[mid]===target) {
//         return mid
//     }else if (nums[mid]<target) {
//         left = mid +1
//     } else {
//         right = mid -1
//     }
//   }

//   return left
// }

// console.log(searchInsert([1, 2, 4, 5, 8, 10], 4)); // 2
// console.log(searchInsert([1, 2, 4, 5, 8, 10], 3)); // 2
// console.log(searchInsert([1, 2, 4, 5, 8, 10], 11)); // 6

// function searchInsert(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = (left + right) >> 1;
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return left
// }

// console.log(searchInsert([1, 3, 5, 6], 5)); // 2
// console.log(searchInsert([1, 3, 5, 6], 2)); // 1
// console.log(searchInsert([1, 3, 5, 6], 7)); // 4
// console.log(searchInsert([1, 3, 5, 6], 0)); // 0

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;


  while (left <= right) {
    let mid = (left + right) >> 1;

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
