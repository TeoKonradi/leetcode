function maxArea(height: number[]): number {
  let left: number = 0;
  let right: number = height.length - 1;
  let maxArea: number = 0;

  while (left < right) {
      const min: number = Math.min(height[left], height[right]);
      const rl = right - left;
      const currentArea = min * rl;
      console.log(`min: ${min}`, `rl: ${rl}`, `currentArea: ${currentArea}`);
    
      maxArea = Math.max(maxArea, currentArea);
      console.log(`maxArea: ${maxArea}`);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
