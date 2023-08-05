function zigZag(s: string, numRows: number): string {
  if (numRows <= 1) {
    return s;
  }

  let i,
    row = 0;
  let down = true;
  let array: string[] = [];
  for (i = 0; i < numRows; i++) {
    array[i] = "";
  }

  for (i = 0; i < s.length; i++) {
    array[row] += s[i];
    if (row === 0) {
      down = true;
    }
    if (row === numRows - 1) {
      down = false;
    }
    down ? row++ : row--;
  }

  let answer = "";
  for (i = 0; i < numRows; i++) {
    answer += array[i];
  }

  console.log(answer);
  return answer;
}

const s = "PAYPALISHIRING";
const numRows = 3;
zigZag(s, numRows);
