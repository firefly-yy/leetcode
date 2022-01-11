// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
/**
 * @param {number[]} height
 * @return {number}
 */
// double point
var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1
    let res = 0
    while (l < r) {
        res = height[l] < height[r] ?
            Math.max(res, (r - l) * height[l++]) :
            Math.max(res, (r - l) * height[r--])
    }
    return res
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))