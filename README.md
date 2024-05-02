# has-empty
## Function to check the input is non-empty

has-empty is a package used to check if value is empty or not. It returns 'true' if the value empty (ie., 'null', 'undefined', '', '{}', '[]') and 'false' otherwise. Note: 0, false, [""] are considered as non-empty value. Both primitive and non-primitive values are checked.

## Features
- Import a package, pass value as argument,
- Returns true/false based on validlity check,
- Use case: to validate if we get valid response from server

## Installation
has-empty requires [Node.js](https://nodejs.org/) v10+ to run.

```js
npm i has-empty

 import { isEmpty } from "has-empty"

 or
 
 const { isEmpty } from "has-empty"
```

```js client
// Examples

 isEmpty(null) // true
 isEmpty(undefined) // true
 isEmpty({}) // true
 isEmpty([]) // true
 isEmpty({a: 3, z: 5}) // false
 isEmpty([0, 1]) // false
 isEmpty(new Set([3, 2, 5])) // false
 isEmpty((new Map()).set('a', 22)) // false
 isEmpty(new Set()) // true
 isEmpty(new Map()) // true
 isEmpty('abc') // false
 isEmpty('') // true
 isEmpty('  ') // true
 isEmpty(0) // false
 isEmpty(1) // true
 isEmpty(true) // false
 isEmpty(false) // false
 isEmpty(Symbol('abc')); // false
 isEmpty(Symbol(' ')); // true
 isEmpty(); // true
 isEmpty(new String('xyz')); // false
 isEmpty(new String('')); // true
 isEmpty(new String('  ')); // true
 isEmpty(new Boolean(true)); // false
 isEmpty(new Boolean(false)); // false
```

## License
MIT
