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
 
const { hasEmpty } = require("has-empty");

or 

import { hasEmpty } from "has-empty";
```

```js client
// Examples

 hasEmpty(null) // true
 hasEmpty(undefined) // true
 hasEmpty({}) // true
 hasEmpty([]) // true
 hasEmpty({a: 3, z: 5}) // false
 hasEmpty([0, 1]) // false
 hasEmpty(new Set([3, 2, 5])) // false
 hasEmpty((new Map()).set('a', 22)) // false
 hasEmpty(new Set()) // true
 hasEmpty(new Map()) // true
 hasEmpty('abc') // false
 hasEmpty('') // true
 hasEmpty('  ') // true
 hasEmpty(0) // false
 hasEmpty(1) // false
 hasEmpty(true) // false
 hasEmpty(false) // false
 hasEmpty(Symbol('abc')); // false
 hasEmpty(Symbol(' ')); // true
 hasEmpty(); // true
 hasEmpty(new String('xyz')); // false
 hasEmpty(new String('')); // true
 hasEmpty(new String('  ')); // true
 hasEmpty(new Boolean(true)); // false
 hasEmpty(new Boolean(false)); // false
```

## License
MIT
