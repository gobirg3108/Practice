// .reduce() = reduce the elements of an array to a single value

// const prices = [10, 20, 30, 40, 50];

// const total = prices.reduce(sum);
// console.log(`Rs ${total.toFixed(2)}`);

// function sum(accumulator, element) {
//   return accumulator + element;
// }

const grades = [81, 77, 93, 87, 96, 98];

const max = grades.reduce(maxGrade);

const min = grades.reduce(minGrade);

console.log(min);

function maxGrade(accumulator, element) {
  return Math.max(accumulator, element);
}

function minGrade(accumulator, element) {
  return Math.min(accumulator, element);
}
