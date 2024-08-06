/**
 Frequency Counter / Multiple Pointers - areThereDuplicates
 Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 Examples:
 areThereDuplicates(1, 2, 3) // false areThereDuplicates(1, 2, 2) // true areThereDuplicates('a', 'b', 'c', 'a') // true

 Restrictions:
 Time - O(n)
 Space - O(n)
 **/


// function areThereDuplicates(...args) {
//     let frequencyCounter = {};
//
//     for (let val of args) {
//         let key = typeof val + val;
//         if (frequencyCounter[key]) {
//             return true;
//         }
//         frequencyCounter[key] = 1;
//     }
//
//     return false;
// }

/**
 Bonus:
 Time - O(n log n)
 Space - O(1)
 **/
function areThereDuplicates(...args) {

    args.sort((a, b) => {
        if (typeof a !== typeof b) {
            return typeof a > typeof b ? 1 : -1;
        }
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    for (let i = 0; i < args.length - 1; i++) {
        if (args[i] === args[i + 1]) {
            return true;
        }
    }
    return false
}

console.log(areThereDuplicates('a', 'b', 'c', 2, 4, 'a')); // true