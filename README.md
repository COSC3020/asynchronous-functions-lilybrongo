# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

The worst-case for my implementation would be $\Theta(n)$. This is because when we walk through the program, we see in countMatches function that we need to compare array[i] to key, this will take $\Theta(1)$ time. Since we are iterating over different size arrays we need to acknowledge the size of the array, so we will have a complexity of $\Theta(n)$. Next we look at the promise. The promise doesn't actually change the complexity of the implementation, even though there is a loop within the promise, there is not a significant enough change to be acknowledged so we are still at $\Theta(n)$. Lastly we need to look at the testCase function. This function calls countMatches, awaits its resolutions, and then passes the result to callback. Since this also does not have a higher order operation to $\Theta(n)$, this is why we have the worst case time complexity of $\Theta(n)$. 

Referenced egkallas repository to see test code example, I modeled his layout but with different numbers and keys.

https://www.geeksforgeeks.org/async-await-function-in-javascript/
This source gave a general overview of async and await uses

https://www.w3schools.com/js/js_async.asp
This source explained different syntax as well as promises

https://caolan.github.io/async/v3/
This was the source given but was helpful with explaining the overall use of async functions while giving examples

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
This source explained the use of callbacks and the benefits of using them. 