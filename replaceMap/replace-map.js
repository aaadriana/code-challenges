/*
Imagine that the array method 'map' has vanished. It's no longer available and therefore you can't use it anymore. Your initial goal in this challenge is to implement a replacement for 'map' - 'yourMapReplacement'. It needs to function exactly like map.

Your main goal is to pass a function called 'roundToEven' to your replacement map function. 'roundToEven' takes arrays of numbers and rounds them to the next even number. Even numbers inside the array will not be modified.

*/

const array = [3, 5, 8];

console.log(array.yourMapReplacement(roundToEven)); // [4, 6, 8]
