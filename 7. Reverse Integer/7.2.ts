function reverseInteger(x: number): number {
  const INT32_MIN = -Math.pow(2, 31);
  const INT32_MAX = Math.pow(2, 31) - 1;

  // Step 1: Extract the sign
  const sign = x >= 0 ? 1 : -1;

  // Step 2: Convert the absolute value to a string and reverse it
  const reversedStr = Math.abs(x).toString().split("").reverse().join("");

  // Step 3: Convert the reversed string back to an integer and apply the sign
  const reversedInt = sign * parseInt(reversedStr, 10);

  // Step 4: Check if the reversed integer is within the 32-bit signed integer range
  if (reversedInt < INT32_MIN || reversedInt > INT32_MAX) {
    return 0;
  }

  return reversedInt;
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
console.log(reverseInteger(0)); // Output: 0
console.log(reverseInteger(1534236469)); // Output: 0 (reversing causes overflow)
