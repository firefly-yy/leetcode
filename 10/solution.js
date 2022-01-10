// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
/**
 * @param {number[]} height
 * @return {number}
 */
// double point
// var maxArea = function (height) {
//     let l = 0
//     let r = l + 1
//     let max = 0
//     let space = 0
//     while (r < height.length) {
//         if (height[l] === height[r]) {
//             space = (r - l + 1) * height[l]
//         }
//         r++;
//         if (space > max) {
//             max = space
//         }
//     }
//     return max
// };
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))