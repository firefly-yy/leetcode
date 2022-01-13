// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // let str = ""
    // if (strs.length === 0) {
    //     return str
    // }
    // let i = 1
    // let pre = strs[0]
    // while (i < strs.length) {
    //     while (strs[i].indexOf(pre) !== 0) {
    //         pre = pre.substring(0, pre.length - 1)
    //     }
    //     i++
    // }
    // return pre

};

////// 补充
let a = [1, 2, 3, 4, 5]
const n = a.length
function randIndex(arr, length) {
    let rand = Math.floor(Math.random() * (length + 1))
    return rand
}

function changeArray(arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
    return arr
}
console.log(
    changeArray(a, 2, 3)
)

// Knuth 洗牌算法
for (let i = n - 1; i > 0; i--) {
    changeArray(a, i, randIndex(a, i))
}
console.log(a)

