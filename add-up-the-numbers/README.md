# [Add up the Numbers from a Single Number](https://edabit.com/challenge/4gzDuDkompAqujpRi)

This function calculate the sum of all the numbers,
from 1 up to a given number.

For example,
if the input is 4 then
your function should return 10 because 1 + 2 + 3 + 4 = 10.

## Syntax

> addUp(`num`) -> `number`

### Parameters

**num**: `paramType`

A given number that will calculate 
the sum of all the numbers from 1 up to the given number. (`num`)

### Return Value: `number`

A number that will be sum of all the numbers from 1 up
to the given number.

## Test Cases

```js
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
 }); 
```

## Use Cases

```js
const numToAddUp = 5;
const sumAddUp = addUp(numToAddUp);
console.log(sumAddUp); // 15
```

```js
const numToAddUp = 4;
const sumAddUp = addUp(numToAddUp);
console.log(sumAddUp); // 10
```

---

## Retrospective

This solution is interesting to me because he only use a mathematical formula
(a formula that I didn't know until now but I learn it.)
This was way more simple than my way were I used a `loop` to iterate
on each number.

And it show me again that in coding there is not single way to resolve a problem,
sometimes the best way is to use a `loop` and/or a build in JS method.
And sometimes like in this code it's more efficient to use a mathematic formula.

Right now I personally don't have the competence to choose the best/efficient way
to resolve a problem. But with practice I hope to learn it.

### Continue Doing

Practicing.

### Start Doing

looking for other people's solution comparing them
choosing the best/efficient way and learning by doing so.

### Stop Doing

Being demotivated when I have difficulty to find a solution quick enough.
