'use strict';

function makeArray(firstArray, secondArray, maxLength) {
  //0 max len
  if (maxLength === 0) {
    return [];
  }
  const firstLen = firstArray.length;
  // less or eq than 1st array
  if (firstLen >= maxLength) {
    return firstArray.slice(0, maxLength);
  }

  const secondLen = secondArray.length;
  // can hold two arrays
  const resArr = [];
  if (firstLen + secondLen <= maxLength) {
    return resArr.concat(firstArray, secondArray);
  } else {
    // full first and part of second
    const reminderLen = maxLength - firstLen;
    return resArr.concat(firstArray, secondArray.slice(0, reminderLen));
  }
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
