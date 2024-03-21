import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
let num = readNumber('skip-size');
let str = readString('user-text');
let skipped = '';

// str = 123456789, num = 3 => 147 = str[0], str[3], str[6]

  // create a new string with skipped characters
for (let i = 0; i < str.length; i += num) {
  skipped += str[i];
}

  // display the skipped string
  display('skipped-output', skipped);
});