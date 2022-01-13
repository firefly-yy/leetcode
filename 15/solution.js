// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    // 先排序
    // ! 直接sort在数字为负数的时候会出错
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        // 保证当前的数字跟前面一个不一样,
        if (nums[i] === nums[i - 1]) {
            continue
        }
        let target = -nums[i]
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[left], -target, nums[right]])
                while (nums[left] === nums[left + 1]) {
                    left++
                }
                left++
                while (nums[right] === nums[right - 1]) {
                    right--
                }
                right--
            } else if (nums[left] + nums[right] > target) {
                right--
            } else {
                left++
            }

        }
    }
    return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
