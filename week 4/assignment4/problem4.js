
// Problem 4: Pattern Generator
// Dodge Shepard  
//10-20-25



function createPyramid(height){
    let pyramid = "";
    for (let row =1; row <=height; row++){
        let spaces = " ".repeat(height - row);
        let stars = "*".repeat (2*row - 1)
        pyramid += spaces + stars + "\n";

    }
    return pyramid
}

function createNumberStaircase(steps){
    let staircase = "";

    for (let row = 1; row <= steps; row++) {
        let line = "";

        for (let num = 1; num <= row; num++) {
            line += num;
        }

        staircase += line + "\n";
    }

    return staircase;
}


function createCheckerboard(size) {
    let board = "";

    for (let row = 0; row < size; row++) {
        let line = "";

        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                line += "X";
            } else {
                line += "O";
            }
        }

        board += line + "\n";
    }

    return board;
}

// testy testy testy//

console.log(createPyramid(3));
console.log(createPyramid(4));
console.log(createNumberStaircase(5));
console.log(createCheckerboard(4));


