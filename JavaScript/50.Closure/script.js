// Closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React,Vue,Angular

// function outer() {
//   let message = "hello";
//   function inner() {
//     console.log(message);
//   }
//   inner();
// }

// outer();

// let count = 0; // this variable inside function does not increase value
// function increment() {
//   count++;
//   console.log(`count increased to ${count}`);
// }
// increment();
// increment();
// increment();

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(`Count increased to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }
//   return { increment, getCount };
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The Current count is ${counter.getCount()}`);

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }
  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(31);
game.increaseScore(7);
game.decreaseScore(30);

console.log(`The Final Score is ${game.getScore()}pts`);
