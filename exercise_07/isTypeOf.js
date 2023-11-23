/**
 * #7 :: Exprot JS function "isTypeOf" to check if type of value matches type received as argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc :: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * input: 'string' | 'number' | 'boolean' | 'array' (value)
 * input: string (type)
 * output:
 */

/**
 * Check if the type of a value matches the specified type.
 * @param {string | number | boolean | Array} value - The input value.
 * @param {string} type - The type to compare against ('string' | 'number' | 'boolean' | 'array').
 * @returns {boolean} - True if the type matches, false otherwise.
 */

function isTypeOf(value, type) {

  if (type === "string") {
      return typeof value === "string";
  }
  if (type === "number") {
      return typeof value === "number";
  }
  if (type === "boolean") {
      return typeof value === "boolean";
  }
  if (type === "array") {
      return Array.isArray(value);
  }
}

export default isTypeOf;
