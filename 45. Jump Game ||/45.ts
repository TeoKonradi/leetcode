let nums = [2, 3, 1, 1, 2, 1, 1];

function jump(nums: number[]): number {
  if (nums.length <= 1) return 0;
  let jumps = 0;
  let maxReach = nums[0];
  let edge = nums[0];
  console.log("edge start -", edge);
  console.log("maxReach start -", maxReach);
  for (let i = 1; i < nums.length; i++) {
    console.log("i -", i);
    console.log("nums -", nums);
    console.log("edge after cycle start -", edge);
    console.log("maxReach after cycle start -", maxReach);
    if (i > edge) {
      jumps++;
      console.log("edge if state -", edge);
      console.log("maxReach if state -", maxReach);
      edge = maxReach;
      console.log("edge if state after '=' -", edge);
      console.log("maxReach if state after '='", maxReach);
    }
    console.log("edge out if -", edge);
    console.log("maxReach out if -", maxReach);
    console.log("(nums[i]) out if -", nums[i]);
    console.log("(nums[i] + i) out if -", i + nums[i]);
    maxReach = Math.max(maxReach, i + nums[i]);
    console.log("edge after Max -", edge);
    console.log("maxReach after Max -", maxReach);
  }
  return jumps + 1;
}
const end = jump(nums);
console.log(end);
