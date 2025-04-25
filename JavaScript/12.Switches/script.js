// SWITCH = can be an efficient replacement to many else if statements

// let day = 3;

// switch (day) {
//   case 1:
//     console.log(`It is Monday`);
//     break;
//   case 2:
//     console.log(`It is Tuesday`);
//     break;
//   case 3:
//     console.log(`It is Wednesday`);
//     break;
//   case 4:
//     console.log(`It is Thursday`);
//     break;
//   case 5:
//     console.log(`It is Friday`);
//     break;
//   case 6:
//     console.log(`It is Saturday`);
//     break;
//   case 7:
//     console.log(`It is Sunday`);
//     break;
//   default:
//     console.log(`${day} is not a Day `);
//     break;
// }

let testScore = 100;

let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "Your grade is A";
    break;
  case testScore >= 80:
    letterGrade = "Your grade is B";
    break;
  case testScore >= 70:
    letterGrade = "Your grade is C";
    break;
  default:
    letterGrade = "You didn't get any grades";
    break;
}

console.log(letterGrade);
