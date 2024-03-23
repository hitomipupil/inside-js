/**
 * returns true if a number is even
 * otherwise returns false
 * @param {number} num - the number
 * @returns {boolean} is the number even?
 */
export const isEven = (num) => {
  if(num % 2 === 0){
    return true;
  } else {
    return false;
  }
};

console.log(isEven(8));
console.log(isEven(0));
console.log(isEven(-5));
console.log(isEven(400));
console.log(isEven(27));