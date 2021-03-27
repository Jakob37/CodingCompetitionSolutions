
process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let array = ""
process.stdin.on("data", (chunk) => {
    array += chunk
})

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function canBeTransformed(origVal) {
    const exponent = origVal / 2 - 1;
    const truncatedExponent = Math.max(exponent);
    const transformed = Math.pow(origVal, truncatedExponent);
    return origVal % 2 != transformed % 2; 
}

const changeMap = new Map();

for (let i = 1; i <= 20; i++) {
    const exp = i / 2 - 1;
    const result = Math.pow(i, exp);
    const isWhole = Number.isInteger(result);
    const isDifferent = i % 2 == result % 2;
    changeMap.set(i, [isWhole, isDifferent, result]);
}

console.log(changeMap);



process.stdin.on("end", () => {
    
    array = array.split("\n");

    const nbrTests = parseInt(array.shift());

    let pos = -1;
    for (let test = 0; test < nbrTests; test++) {
        // const N = parseInt(array[pos]);
        pos += 2;
        const numbers = array[pos].split(' ').map(val => parseInt(val));
        // console.log(numbers);

        const valSum = sum(numbers);
        const isEven = valSum % 2 == 0;

        let result = -1;
        if (isEven) {
            result = 0;
        } else {
            for (const val of numbers) {
                if (val == 2) {
                    result = 1;
                }
            }
        }
        console.log(result);
    }
})

