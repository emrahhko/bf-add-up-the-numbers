# [_sir]([link-to-user](https://edabit.com/user/F7iZc3vpy7d9ALD6D))

```js
function addUp(num) {
  return (num * (num + 1))/2;
}
```

## Strategy

The strategy behind this code is to calculate the sum of all the numbers,
from 1 up to a given number (num).
Instead of adding each number individually,
it uses a mathematical formula to directly calculate the sum.
This formula comes from a pattern in how the sum of consecutive
whole numbers works.
The code basically swaps a potentially slow step-by-step process
with a faster math move.

## Implementation

This user create a JS function called addUp which takes a single parameter `num`.
The purpose of this function is to calculate the sum of all the numbers
from 1 up to the given num.

It multiplies num by num + 1.

It then divides the result by 2. This is because the sum of consecutive
natural numbers can be calculated using the formula (n * (n + 1))/2.

The function is using a mathematical formula to directly compute
the sum of the first num natural numbers, rather than looping through them
and adding each one individually.

## Possible Refactors

It's already clear and concise but
he could do it in a single expression
so he didn't need a `return` statement.

like this:

```js
const addUp = (num) => (num * (num + 1)) / 2;
```

## References

This solution is interesting to me because he only use a mathematical formula
in order to understand it well i had to review operator precedence.
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
