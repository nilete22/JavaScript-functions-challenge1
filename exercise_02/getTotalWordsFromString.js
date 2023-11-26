/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * Get the total number of words in a string.
 * @param {string} inputString
 * @returns {number}
 */
function getTotalWordsFromString(inputString) {
  const words = inputString.split(/\s+/);
  return words.length;
}

export default getTotalWordsFromString;
