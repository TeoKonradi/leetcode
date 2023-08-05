/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function() {
    
    const s = "MCMLXXXIX";
    // s = 1989

    const romanNums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let bounce = 0;

    for (let i = 0; i < s.length; i++){
        if (s[i] === 'I' && s[i + 1] === 'V'){
            bounce += 4;
            i++;
        }
        else if (s[i] === 'I' && s[i + 1] === 'X'){
            bounce += 9;
            i++
        }
        else if (s[i] === 'X' && s[i + 1] === 'L'){
            bounce += 40;
            i++
        }
        else if (s[i] === 'X' && s[i + 1] === 'C'){
            bounce += 90;
            i++
        }
        else if (s[i] === 'C' && s[i + 1] === 'D'){
            bounce += 400;
            i++
        }
        else if (s[i] === 'C' && s[i + 1] === 'M'){
            bounce += 900;
            i++
        }
        else {
            bounce += romanNums[s[i]];
        }
    }
    console.log(bounce);
    return (bounce);
};

romanToInt();