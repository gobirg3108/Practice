// variable scope = where a variable is recognized
//                  and accessible (local vs global)

let x = 3; // This is global Scope 

function function1() {
  x = 5; // local scope
  console.log(x);
}

function function2() {
  // x = 7;  // local scope
  console.log(x);
}

function2();
