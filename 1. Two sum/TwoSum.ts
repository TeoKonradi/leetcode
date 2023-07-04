function twoSum(nums: number[], target: number): number[] {
  for (let i: number = 0; i < nums.length; i++) {
    console.log(i);
    for (let j: number = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
}
