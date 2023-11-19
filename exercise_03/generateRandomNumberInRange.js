/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * Generate a rounded random number within the specified range.
 * @param {number} limit
 * @returns {number}
 */
function generateRandomNumberInRange(limit) {
  if (typeof limit !== "number") {
    throw new Error("Input must be a number");
  }

  const randomNumber = Math.random() * (limit + 1);

  return Math.floor(randomNumber);
}

export default generateRandomNumberInRange;
