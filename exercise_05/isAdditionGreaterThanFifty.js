/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 * Check if the addition of two numbers is greater than or equal to 50.
 * @param {number} summand1
 * @param {number} summand2
 * @returns {boolean}
 */
function isAdditionGreaterThanFifty(summand1, summand2) {
  const sum = summand1 + summand2;
  return sum >= 50;
}

export default isAdditionGreaterThanFifty;
