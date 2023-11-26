/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * Calculate how much a number exceeds or is left to reach a threshold.
 * @param {number} number
 * @param {number} threshold
 * @returns {number}
 */
function getDistanceFromThreshold(number, threshold) {
  return number - threshold;
}

export default getDistanceFromThreshold;
