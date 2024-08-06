/**
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

 Your solution MUST have the following complexities:
 Time: O(N)

 Sample Input:
 sameFrequency (182, 281) // true
 sameFrequency (34,14) // false
 sameFrequency (3589578, 5879385) // true
 sameFrequency (22,222) // false
 **/

function sameFrequency(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length) return false;

    const countNum1 = {};
    const countNum2 = {};

    for (let digit of strNum1) {
        countNum1[digit] = (countNum1[digit] || 0) + 1;
    }

    for (let digit of strNum2) {
        countNum2[digit] = (countNum2[digit] || 0) + 1;
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));