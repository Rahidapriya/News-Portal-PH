<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:A

<i>Write your explanation here</i>
Because there assigned an empty object to the variable greeting and then logged its value using console.log().
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>
In this case, there trying to add a number (1) and a string ("2"). JavaScript converts the number to a string, and then it concatenates the two strings, resulting in "12".

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
You create an array food containing four emoji elements
and an object info with a property favoriteFood that initially references the first element of the food array, which is "🍕".You then reassign the favoriteFood property of the info object to "🍝".
Finally, when you log the food array to the console, it remains unchanged except for the reassignment of the info.favoriteFood property. So, only the info object is modified, and food still contains ['🍕', '🍫', '🥑', '🍔'].

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
In this code the sayHi function expects an argument name, but when you call sayHi() without passing any arguments, name is undefined. Therefore, the template string "Hi there, " is concatenated with the value of name, which is undefined. The result is "Hi there, undefined", which is what will be logged to the console.

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>
In this code, you have an array nums containing four numbers. You use the forEach method to iterate through each element of the array. Inside the callback function, you check if num is truthy (i.e., not equal to 0). For the numbers 1, 2, and 3 in the array, the condition is true, and count is incremented by 1 each time. Therefore, count ends up being 3, and that's what will be logged to the console.

</p>
</details>
