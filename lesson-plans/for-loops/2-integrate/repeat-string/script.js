import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-it").addEventListener('click', () => {
  debugger;

  // read user values
let str = readString("user-text");
let num = readNumber("number-of-times");

  // repeat the string
let newStr = '';

for (let i = 0; i < num; i++){
    newStr += str;
    }

  // display the repeated string
  display('repeated-output', newStr);
});
