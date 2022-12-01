# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

If there is no input then you should get `TRIVIAL_PARTITION_KEY`. And if the input has `partitionKey` key there will be two possible results.
If the value of `partitionKey` or the stringfied result of the `partitionKey` is longer than 256, then you should get hashed `event.partitionKey`.
Else you should get `event.partitionKey` or stringfied `event.partitionKey`. Other wise you can get hashed stringfied `event`.
