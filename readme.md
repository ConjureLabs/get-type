# get-type

```sh
npm i @conjurelabs/get-type
```

## Usage

returns the 'type' of a single value

```js
getType({}) // 'object'
getType([]) // 'array'
getType('') // 'string'
getType(12) // 'number'
getType(5n) // 'bigint'
getType(new Date()) // 'date'
getType(new Error()) // 'error'
```

gotchyas:
  - only basic arrays will return 'array' - Int8Array and others will return 'object'
  - anything not determined will return 'object'
  - this does not differentiate between things like functions and async functions
  - set up for Node, tested on v12 - not set up for browsers
