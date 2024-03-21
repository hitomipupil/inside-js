import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  let str = readString('to-pyramid');

  // create the pyramid
  let result = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      result += str[j];

      if (j < str.length - 1) {
        result += ' ';
      }
    }
    if (i < str.length - 1) {
      result += '\n';
    }
  }

  // display the pyramid
  display('pyramided', result);
});
