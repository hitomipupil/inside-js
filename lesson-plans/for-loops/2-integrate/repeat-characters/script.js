import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  debugger;

  // read user values
let str = readString("user-text");
let num = readNumber("number-of-times");

  // repeat the characters in the text
let after = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < num; j++) {
      after += str[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', after);
});
