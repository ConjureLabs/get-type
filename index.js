function getType(value) {
  // captures primitives
  // may give `'object'` or other value if a custom class
  // overrides the expected `.valueOf()`
  const primitiveValue = !(value instanceof Date) && value && value.valueOf && value.valueOf.toString() === 'function valueOf() { [native code] }' ? value.valueOf() : value
  let valueType = typeof primitiveValue

  if (valueType !== 'object') {
    return valueType
  }

  // the following code deals with built-in objects
  // that are not primitives
  // (thus `typeof` is `'object'`)

  // undefined is a primitive
  // null is a built-in value
  if (value === null) {
    return 'null'
  }

  if (Array.isArray(value)) {
    return 'array'
  }

  if (value instanceof Date) {
    return 'date'
  }

  if (value instanceof Error) {
    return 'error'
  }

  if (value instanceof RegExp) {
    return 'regexp'
  }

  if (
    value instanceof Map ||
    value instanceof WeakMap
  ) {
    return 'map'
  }

  if (
    value instanceof Set ||
    value instanceof WeakSet
  ) {
    return 'set'
  }

  if (value instanceof Promise) {
    return 'promise'
  }

  return 'object'
}

module.exports = getType
