/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        console.log(i)
        for (let j = i + 1; j < nums.length; j++) {
            console.log(j)
            if (target === nums[i] + nums[j]) {
                return [i, j]
            }
        }
    }
};


