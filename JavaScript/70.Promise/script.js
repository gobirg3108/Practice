// Promise = An Object that manages asynchronous operations.
//           wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//            Pending --> Resolved or Rejected
//            new Promise ((resolve,reject)=>{asynchronous code})

// DO THESE IN ORDER]

// 1.WALK THE DOG
// 2.CLEAN THE KITCHEN
// 3.TAKE OUT THE TRASH

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false;
      if (dogWalked) {
        resolve("You walk the Dog 🐕‍🦺");
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const KitchenClean = true;
      if (KitchenClean) {
        resolve("You Clean the Kitchen 🧹");
      } else {
        reject("You can't clean the kitchen");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trash = false;
      if (trash) {
        resolve("You take out the trash ♻️");
      } else {
        reject("You can't take out the trash");
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the chores!");
  })
  .catch((error) => console.log(error));
