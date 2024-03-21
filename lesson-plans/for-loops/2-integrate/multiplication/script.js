import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById("do-math").addEventListener('click', () => {
  debugger;

  // read user values
let left = readNumber("left");
let right = readNumber("right");
  // use a for loop to multiply the two numbers


let result = 0;
// 5 * 3 = 5 + 5 + 5
for(let i = 0; i < right; i ++){
  result += left;
}

display('product', result);

  // display the product
});
