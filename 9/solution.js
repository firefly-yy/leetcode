// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
/**
 * @param {number} x
 * @return {boolean}
 */
// double point
var isPalindrome = function (x) {
    let str = x.toString()
    let l = 0
    let r = str.length - 1
    while (l < r) {
        if (str[l] !== str[r]) {
            return false
        }
        l++;
        r--;
    }

    return true
}
console.log(isPalindrome(121))