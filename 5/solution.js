//Given a string s, return the longest palindromic substring in s.

/**
 * @param {string} s
 * @return {string}
 */

// 双向扩展
// 比较长度不断更新str
var longestPalindrome = function (s) {
    let str = ''
    for (let i = 0; i < s.length; i++) {
        //奇数偶数回文两种情况，所以需要for循环
        for (let j = 0; j < 2; j++) {
            let left = i
            let right = left + j
            while (s[left] && s[left] === s[right]) {
                left--
                right++
            }
            // 双指针计算数组长度 = right - left + 1
            // 边际判断  left and right 都多加了1 , 所以要-2，数组长度判断 index要+1

            if (right - left + 1 - 2 > str.length) {
                str = s.slice(left + 1, right)
            }
        }
    }
    return str
};