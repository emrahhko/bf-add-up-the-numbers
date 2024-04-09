'use strict';

import { addUp } from './solution1.js';

describe('Basic Tests', () => {
  test(' 4  ->  10', () => {
    expect(addUp(4)).toEqual(10);
  });
  test(' 1  ->  1', () => {
    expect(addUp(1)).toEqual(1);
  });

  test(' 5  ->  15', () => {
    expect(addUp(5)).toEqual(15);
  });

  test(' 10  ->  55', () => {
    expect(addUp(10)).toEqual(55);
  });

  test(' 100  ->  5050', () => {
    expect(addUp(100)).toEqual(5050);
  });

  test(' 0  ->  0', () => {
    expect(addUp(0)).toEqual(0);
  });

  test(' 1000  ->  500500', () => {
    expect(addUp(1000)).toEqual(500500);
  });
});
