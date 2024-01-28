let nums = [2, 3, 1, 1, 4];

function jump(nums: number[]): number {
  if (nums.length <= 1) return 0;
  let jumps = 0;
  let maxReach = nums[0];
  let edge = nums[0];
  console.log("edge0", edge);
  console.log("maxReach0", maxReach);
  for (let i = 1; i < nums.length; i++) {
    console.log("edge1", edge);
    console.log("maxReach1", maxReach);
    if (i > edge) {
      jumps++;
      console.log("edge2", edge);
      console.log("maxReach2", maxReach);
      edge = maxReach;
      console.log("edge3", edge);
      console.log("maxReach3", maxReach);
    }
    console.log("edge4", edge);
    console.log("maxReach4", maxReach);
    console.log("nums[i]4", nums[i]);
    maxReach = Math.max(maxReach, i + nums[i]);
    console.log("edge5", edge);
    console.log("maxReach5", maxReach);
  }
  return jumps + 1;
}

const end = jump(nums);
console.log(end);
