# JS-Challenges
### List of JavaScript challenges in this repository

## 1. Prime numbers
Write a Javascript function that takes an array of numbers and returns a new array of prime numbers filtered from the old array.

## 2. Palindrome
Write a function that takes a string and returns true/false based on whether it is a palindrome or not.

## 3. Array reversing
Write a Javascript function that takes an array of numbers and returns a reversed version.

## 4. Inplace Array reversing
Write a Javascript function that takes an array of numbers and returns a reversed version. Note: here you are not allowed to use an intermediary array. You need to use the same array passed in the parameter and just reverse its content. Do not use inbuilt functions like reverse(). Just use loops and conditions.

## 5. Nested Objects
Write a function that takes a formatted array. The array is made of a string of people’s identities in a predefined format, 
“first-name second-name, age” . Ex “Patrick wyne, 30”

		[“Patrick wyne, 30”, “lil wyne, 32”,“Eric mimi, 21”,“Dodos deck, 21”,“Alian Dwine, 22”,“Patrick wyne, 33”,“Patrick wyne, 100”,“Patrick wyne, 40”]

From the array, the function returns a nested object. This is an object with keys, first-name and the corresponding child object is the rest of the info, second name and age

```
{
   patrick: {second-name:wyne, age:30},
   lil: {second-name:wyne, age:30},
  ...
}
```
## 6. Custom sorting
Write a function that sorts an array in descending order. The exception is that if it encounters a prime number, it should erase it from the array.
Note: this should be done entirely from scratch. No inbuilt sorting functions allowed.
Note: no String function or processing is allowed. 
Only use raw mathematical operations, loops and conditional statements. 

## 7. Time complexity
We would like to know if a particular array contains a majority element. An array has a majority element if there is at least one element that counts more than half of the size. 

Ex:
```
[3,1,3,4,4,5,3,5,3,3,3,6,3]
 ```
 this array contains a majority because the occurrence of 3 is 7 out of total 13 elements.
 ```
[3,1,3,4,4]
```
This array has no majority element as none of the elements counts more than half of the array size.



