

// Problem 3 : Grade Calculator
// Dodge Shepard  
//10-20-25



function calculateAverage(scores) {
    if (scores.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    let average = total / scores.length;
    return average;
}
function dropLowestScore(scores) {
    let copy = scores
    let lowest = Math.min (copy);
    let index = copy.indexOf(lowest);
    copy.splice(index, 1);

    return copy;
}

// Was this supposed to be the average score or a single imput? //
function getLetterGrade(score){
    return (score >= 90) ? "A" :
            (score >= 80) ? "B ":
            (score >= 70) ? "C":
            (score >= 60) ? "D": "F"
    
}

function curveGrades(scores, curveAmount){
    let curvedScores = scores.map(function(score){
       let curved = score + curveAmount
       if (curved > 100){
        
        curved = 100;

       }
       return curved;

    });
    return curvedScores;

}

// testy test test //
console.log(calculateAverage([80, 90, 70]));
console.log(calculateAverage([100, 50, 75]));
console.log(calculateAverage([]));


console.log(dropLowestScore([80, 90, 70, 85]));
console.log(dropLowestScore([50, 50, 75, 100]));

console.log(getLetterGrade(95));
console.log(getLetterGrade(82));
console.log(getLetterGrade(58));

console.log(curveGrades([85, 95, 70], 10));
console.log(curveGrades([90, 96, 80], 5));