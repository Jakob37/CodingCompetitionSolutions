
process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let array = ""
process.stdin.on("data", (chunk) => {
    array += chunk
})

// /**
//  * @param {Array<string>} array 
//  * @returns {Array<string>}
//  */
// function readOneLine(array) {
//     const row = array.shift();
//     const [a, b] = row.split(' ');
//     return [parseInt(a), parseInt(b)];
// }


process.stdin.on("end", () => {

    
    array = array.split("\n");

    const nbrTests = parseInt(array.shift());

    let pos = 0;
    for (let test = 0; test < nbrTests; test++) {
        const [N, discSize] = array[pos].split(' ').map(elem => parseInt(elem));
        pos += 1;
        let bestMovieRating = 0;
        for (let movie = 0; movie < N; movie++) {
            const [size, rating] = array[pos].split(' ').map(elem => parseInt(elem));
            if (size <= discSize && rating > bestMovieRating) {
                bestMovieRating = rating;
            }
            pos += 1;
        }
        console.log(bestMovieRating);
    }
})

