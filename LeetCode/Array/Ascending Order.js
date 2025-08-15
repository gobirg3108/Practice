function arraySorting(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr
}

let arr = [20, 1, 3, 100, 5];
console.log(arraySorting(arr));

