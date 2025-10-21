

// Problem 2: leaf counter
// Dodge Shepard  
//10-20-25



function countLeaves(days) {
    let total = 0;
    let leavesToday = 10;

    for (let day = 1; day <= days; day++) {
        total += leavesToday;


        // do you want us to use === ? i wasnt sure so i threw it in even if it is incriments of 10 anyways //
        if (day === 1) {
            leavesToday *= 2; 
        } else {
            leavesToday += 10; 
        }
    }

    let outputTotal = `After ${days} days, a total of ${total} leaves have fallen.`;
    return outputTotal;
}


// I was a little confused on if you wanted us to put an array of colors in for you or if you are only doing it in console commands, this is my best guess //
function categorizeLeafColors(leaves) {
    let colorCount = {};

    for (let i = 0; i < leaves.length; i++) {
        let color = leaves[i];

        if (colorCount[color]) {
            colorCount[color]++;
        } else {
            colorCount[color] = 1;
        }
    }

    return colorCount;
}

// tests //
console.log(countLeaves(1));
console.log(countLeaves(2));
console.log(countLeaves(4));
console.log(countLeaves(5));

console.log(categorizeLeafColors(["red", "yellow", "red", "brown"]));
console.log(categorizeLeafColors(["orange", "orange", "orange"]));
console.log(categorizeLeafColors([]));