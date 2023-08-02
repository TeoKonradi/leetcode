function reverse(x) {
    var INT32_MAX = Math.pow(2, 31) - 1;
    var INT32_MIN = -1 * Math.pow(2, 31);
    console.log("min:", INT32_MIN, "max:", INT32_MAX);
    console.log("min / 10:", INT32_MIN / 10, "max / 10:", INT32_MAX / 10);
    var reversed = 0;
    while (x !== 0) {
        var digit = x % 10;
        console.log("digit:", digit, ",", "x:", x);
        x = Math.trunc(x / 10);
        // Check for potential overflow or underflow
        if (reversed > INT32_MAX / 10 || (reversed === INT32_MAX / 10 && digit > 7)) {
            return 0;
        }
        if (reversed < INT32_MIN / 10 || (reversed === INT32_MIN / 10 && digit < -8)) {
            return 0;
        }
        reversed = reversed * 10 + digit;
        console.log(reversed);
    }
    return reversed;
}
// Test cases
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(1534236469)); // Output: 0 (cause it overflows)
