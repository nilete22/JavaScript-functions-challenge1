/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * Check whether one number is greater than a given number.
 * @param {number} value
 * @param {number} threshold
 * @returns {boolean}
 */
function isGreaterThan(value, threshold) {
  if (typeof value !== "number" || typeof threshold !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  return value > threshold;
}

export default isGreaterThan;
