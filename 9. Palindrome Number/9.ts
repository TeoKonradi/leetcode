function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let str: string = x.toString();
  let cashed: string[] = [];
  if (str.length) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[str.length - 1 - i]) {
        cashed.push(str[i], str[str.length - 1 - i]);
        console.log(cashed);
      }
    }
    if (cashed.length === str.length) {
      return true;
    } else if (cashed.length / 2 === str.length) {
      return true;
    }
  }
  return false;
}
