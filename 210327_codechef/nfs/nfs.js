
process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let array = ""
process.stdin.on("data", (chunk) => {
    array += chunk
})

// Velocity U
// 90o turn S meters away
// To turn, most not exceed V m/s
// Deaccelerate < A/s^2
// OK velocity for turn:
// v^2 = U^2 + 2 * a * S

// U - Velocity
// V - Required velocity
// A - De-acceleration
// S - meters to turn

process.stdin.on("end", () => {
    
    array = array.split("\n");

    let nbrTests = parseInt(array.shift());

    const outcomes = [];

    for (let pos = 0; pos < nbrTests; pos++) {
        const [currVel, targetVel, acc, dist] = array[pos].split(' ').map(val => parseInt(val));

        let outcome = 'yes';
        if (targetVel < currVel) {
            const minimumVel = Math.sqrt(currVel*currVel - 2 * acc * dist);
            if (minimumVel > targetVel) {
                outcome = 'no';
            }

        }

        outcomes.push(outcome);

    }

    console.log(outcomes.join('\n'));

})

