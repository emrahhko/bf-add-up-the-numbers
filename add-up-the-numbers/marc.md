# [Marc](https://edabit.com/user/6QR2QdW689ihtHjan)

```js
function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}
```

## Strategy

In simple terms, the function addUp works by breaking down the task of finding
the sum of all numbers from 1 to a given number (num) into smaller tasks,
each focusing on a smaller range of numbers.

## Implementation

Function Declaration: The addUp function takes one parameter, num, which
represents the number up to which we want to calculate the sum.

Base Case: The function first checks if the given number (num) is 1. If it is,
it simply returns 1.
This is the base case of the recursive function. When num reaches 1,
the recursion stops,
and the function starts returning values back up the call stack.

Recursive Case: If the given number is not 1, the function enters the recursive case.
It calculates the sum of the current number (num) and the result of
calling addUp recursively with num - 1.
This effectively breaks down the problem into smaller problem
by subtracting 1 from the given number in each recursive call.

Recursion Termination: The recursion continues until the base case is reached
(when num becomes 1), at which point the recursion stops, and the function
starts returning the calculated values back up the call stack.

## Possible Refactors

I don't think so it's already concise.

## References 

This solution introduce me to a new concept to me recursion function
a concept that I do not yet understand totally.
[Web3](https://www.w3schools.com/go/go_function_recursion.php)
