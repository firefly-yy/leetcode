//Given a string s, find the length of the longest substring without repeating characters.

// I can do anything
/**
 * @param {string} s
 * @return {number}
 */

/**
 *  just use left point and right point to keep slide window
 *  1. right ++
 *  2. update slide window 
 *  3. left ++
 *  4. until right = param.length
 */
var lengthOfLongestSubstring = function (s) {
    // just expand and narrow the slide window through left point and right point -> tmpArr
    // two point
    let left = 0
    let right = 0
    let max = 0
    let tmpArr = []
    while (right < s.length) {
        if (tmpArr.indexOf(s[right]) === -1) {
            tmpArr.push(s[right])
            right++;
            if (max < tmpArr.length) {
                max = tmpArr.length
            }
        } else {
            // here is problems
            // should contain s instead of tmpArr  like this tmpArr = s.slice(left,tmpArr.length) 
            /// !!!!right is here tmpArr = s.slice(left,right)
            tmpArr = s.slice(left, right).split("")
            left++
        }
    }
    return max
}
