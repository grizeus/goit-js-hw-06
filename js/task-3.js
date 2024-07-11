'use strict';

function checkForSpam(message) {

  const blackList = ['spam', 'sale'];
  const blackLen = blackList.length;
  let result = false;
  const splitted = message.split(" ");
  const splitLen = splitted.length;

  for (let i = 0; i < splitLen; i++) {
    for (let j = 0; j < blackLen; j++) {
      result = splitted[i].toLowerCase().includes(blackList[j]);
      if (result === true) {
        return result;
      }
    }
  }
  return result;
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
