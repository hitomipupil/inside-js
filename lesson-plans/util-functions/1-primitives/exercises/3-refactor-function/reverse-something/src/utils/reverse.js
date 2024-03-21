/**
 * Rexerses a string.
 *
 * @param {string} [text] - The string that will be reversed.
 * @returns {string} reversed string.
 */
export const reverse = (text) => {
  let reversedWord = '';
      for (const char of text) {
        reversedWord = char + reversedWord;
      }
      return reversedWord;
};
