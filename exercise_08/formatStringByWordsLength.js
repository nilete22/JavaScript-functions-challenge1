import getTotalWordsFromString from "../exercise_02/getTotalWordsFromString.js";
import isGreaterThan from "../exercise_04/isGreaterThan.js";

/**
 * Write JS function "formatStringByWordsLength" to check the number of words contained in a given string
 * - if the total number of words is greater than 5, then return the uppercase string
 * - otherwise, return the lowercase string
 * input: string (sentence)
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is a short one."
 * output: "this is a short one."
 */

/**
 *
 * @param {string} sentence
 * @returns {string}
 */

function formatStringByWordsLength(sentence) {
  const totalWords = getTotalWordsFromString(sentence);
  const exceeds = isGreaterThan(totalWords, 5);

  if (exceeds) {
    return sentence.toUpperCase();
  }

  return sentence.toLowerCase();
}

export default formatStringByWordsLength;
