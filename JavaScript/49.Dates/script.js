// Date objects = objects that contain values that represent dates and times
//                These date objects can be changed and formatted

// const date = new Date();
// console.log(date);

//Date(year,month,date,hour,minute,second,ms)

// const date = new Date(2025, 7, 31, 5, 30, 20);

// console.log(date);

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const ms = date.getMilliseconds();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour, minute, second, ms);

const date1 = new Date("2025-06-07");
const date2 = new Date("2025-07-07");

if (date1 < date2) {
  console.log("Happy Birthday ❤️");
} else {
  console.log("Its not my Birthday");
}
