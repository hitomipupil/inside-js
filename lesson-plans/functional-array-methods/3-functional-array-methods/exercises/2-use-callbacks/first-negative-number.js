/**
 * find the first negative number, returns undefined if there is none
 *  does not modify the array
 * @param {any[]} arr - the array of values
 * @returns {(number|undefined)} the first negative number
 */
export const firstNegativeNumber = (arr) => {
  let newArr = arr.filter((el) => typeof el =="number");
  let result = newArr.find((num) => num < 0);
  return result;
};
