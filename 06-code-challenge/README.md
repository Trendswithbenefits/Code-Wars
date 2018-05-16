##Problem Domain/Description:
A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.
Write a function that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

##Link to Code Wars Challenge: 
https://www.codewars.com/kata/nice-array/train/javascript

##Problem Solving Process: 
- Use a "logic gate" to only let arrays through that have at least 2 elements in them
- Get the value of each element, and then look through the array to see if it includes another element that is 1 more or 1 less than the element