
process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
process.stdin.on('data', function(chunk) { start(chunk) });

function start(chunk) {

}

/**
 * @param {Array<string>} array 
 * @returns {Array<string>}
 */
function readOneLine(array) {
    const row = array.splice(0, 1)[0];
    const [a, b] = row.split(' ');
    return [parseInt(a), parseInt(b)];
}


process.stdin.on("end", () => {

    
    array = array.split("\n")

    const nbrTests = parseInt(array.splice(0, 1)[0]);

    for (let test = 0; test < nbrTests; test++) {
        const [N, discSize] = readOneLine(array);

        let bestMovieRating = -Infinity;
        for (let movie = 0; movie < N; movie++) {
            const [size, rating] = readOneLine(array);
            if (size <= discSize && rating > bestMovieRating) {
                bestMovieRating = rating;
            }
        }
        console.log(bestMovieRating);
    }
})

