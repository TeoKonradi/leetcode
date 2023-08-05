function romanToInt(s: string): number {
  const romanNums: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanNums[s[i]] < romanNums[s[i + 1]]) {
      result += romanNums[s[i + 1]] - romanNums[s[i]];
      i++; // Skip the next character as it's part of the subtraction
    } else {
      result += romanNums[s[i]];
    }
  }

  console.log(result);
  return result;
}

const romanNumeral = "MCMLXXXIX";
romanToInt(romanNumeral); // Output: 1989
