/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (16.13%)
 * Total Accepted:    183.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '10\n3'
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division and mod operator.
 *
 * Return the quotient after dividing dividend by divisor.
 *
 * The integer division should truncate toward zero.
 *
 * Example 1:
 *
 *
 * Input: dividend = 10, divisor = 3
 * Output: 3
 *
 * Example 2:
 *
 *
 * Input: dividend = 7, divisor = -3
 * Output: -2
 *
 * Note:
 *
 *
 * Both dividend and divisor will be 32-bit signed integers.
 * The divisor will never be 0.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 2^31 − 1 when the
 * division result overflows.
 *
 *
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let isMinus = false;
  let result = 0;
  if (dividend < 0) {
    isMinus = true;
    dividend = -dividend;
  }
  if (divisor < 0) {
    isMinus = !isMinus;
    divisor = -divisor;
  }
  while (dividend >= divisor) {
    let sum = divisor
    let multiple = 1
    while (dividend > (sum + sum)) {
      sum += sum
      multiple += multiple
    }
    result += multiple
    dividend = dividend - sum;
  }
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  if (isMinus) result = 0 - result;
  if (result > max) return max;
  else if (result < min) return min;
  else return result;
};
