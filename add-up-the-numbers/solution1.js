'use strict';

/**
 * Add up the Numbers from a Single given number (between 1 and 1000) from 1 to the number.
 *
 * @param {number} num - the number to increment from 1 to the number.
 * @returns {number} - sum of num increment.
 */

export const addUp = (num) => {
  if (typeof num !== 'number' || num < 0 || num > 1000) {
    alert('Use only a number between 0 and 1000');
    throw new Error('Use only a number between 0 and 1000');
  }

  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
};
