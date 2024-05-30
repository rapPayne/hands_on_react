# Quick ref - JavaScript things you commonly need for React

## Destructuring
```JavaScript
const array = ['one', 'two', 'three', 'four'];
const object = { id: 123, name: 'Jo', email: 'jo@gmail.com' };
```

```JavaScript
const [first, second, , , last ] = array;

```
// or
let {first, last} = {
  first: 'Cyan',
  last: 'Hall'
}

## Ways to create a function
const getName = user => user.name
const funcName = name => {
  // do something
  return name
}

## Arrays
// Delete at index
array.splice(index, 1)

// Insert at index
array.splice(index, 0, newItem)

// check exist
[1, 2, 3].includes(3) // true

// find index
[1, 2, 3].indexOf(3) // 2; return -1 if not found

// concat
let array3 = array1.concat(array2) // [1].concat([2]) is [1, 2]

// new array
let array4 = [1, 2, 3, 4, 5].slice(2, 4) // [3, 4]

## Iterating arrays
for (const i of [1, 2, 3]) {
  console.log(i)
}
// 1
// 2
// 3

for (const [index, value] of ['Cyan', 'Hall', '.com'].entries()) {
  console.log(index, value)
}
// 0 "Cyan"
// 1 "Hall"
// 2 ".com"

const obj = {part1: 'Cyan', part2: 'Hall', part3: '.com'};
for (const key in obj) {
  console.log(key, obj[key])
}
// or
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value)
}
// part1 Cyan
// part2 Hall
// part3 .com

### But you may not need to iterate
const numbers = [1, 2, 3]
numbers.map(n => n * 2) // [2, 4, 6]
numbers.filter(n => n % 2 === 0) // [2]
numbers.reduce((prev, next) => prev + next, 0) // 6
numbers.find(n => n > 2) // 3

## Async 
funcName('test')
  .then(result => {
    // ...
  })
  .catch(error => {
    // ...
  })
  .finally(() => {
    // ...
  })

## async/await
  const funcName = async () => {
  const data = await fetchData()
  return data
}

await funcName()

## Spread
const options = {
  ...defaults,
  show: true
}

const array3 = [
  ...array1,
  ...array2,
  'newItem'
]

## Template strings
let text = ( `cat
dog
nickelodeon`
);
Template Literals can accept expressions, as well:

let today = new Date();
let text = `The time and date is ${today.toLocaleString()}`;

## Modules
To share JS from another file we need two things:
1. To export from one file
2. To import from the other

file1.js
```JavaScript
export let name = 'Jo';  // "named" export
let age  = 27;
export default age;        // "default" export
```

file2.js
```JavaScript
import age from './file1.js';   // default import
import { name } from './file1.js';  // named import
```
