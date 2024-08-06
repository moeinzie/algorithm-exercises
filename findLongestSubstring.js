/**
 Sliding Window - findLongestSubstring
 Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

 findLongestSubstring(*') // 0
 findLongestSubstring('rithmschool') // 7
 findLongestSubstring('thisisawesome') // 6]
 findLongestSubstring('thecatinthehat') // 7
 findLongestSubstring('bbbbbb') // 1
 findLongestSubstring('longestsubstring') // 8|
 findLongestSubstring('thisishowwedoit') // 6

 Time Complexity - O(n)
 **/

function findLongestSubstring(str) {

    let charIndexMap = {};
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < str.length; end++) {
        let char = str[end];

        if (charIndexMap.hasOwnProperty(char)) {
            start = Math.max(start, charIndexMap[char] + 1);
        }
        charIndexMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(findLongestSubstring("abcabcbb"));
console.log(findLongestSubstring("bbbbb"));