function lengthOfLongestSubstring(s: string): number {
  let maxL = 0;
  let left = 0;
  const char2IndexMap = new Map<string, number>();

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    if (char2IndexMap.has(currentChar) && char2IndexMap.get(currentChar)! >= left) {
      left = char2IndexMap.get(currentChar)! + 1;
    }
    char2IndexMap.set(currentChar, right);
    maxL = Math.max(maxL, right - left + 1);
  }
  return maxL;
}
