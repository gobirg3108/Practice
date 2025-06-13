// ES6 Module = An external file that contains reusable code
//              that can be imported into other Javascript files.
//              Write reusable code for many different apps.
//              Can contain variables , classes,functions ... and more
//              Introduce as part of ECMAScript 2015 update

import { PI, getCircumference, getArea, getVolume } from "./mathUtils.js";

console.log(PI);

let circumference = getCircumference(10).toFixed(2);

console.log(circumference);

let area = getArea(10).toFixed(2);
console.log(area);

let Volume = getVolume(24).toFixed(2);

console.log(Volume);
