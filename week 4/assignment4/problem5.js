
// Problem 5 : Array Manipulator
// Dodge Shepard  
//10-20-25



function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

function rotateArray(arr, positions) {
    if (arr.length === 0) return [];
    positions = positions % arr.length;
    let part1 = arr.slice(-positions);
    let part2 = arr.slice(0, arr.length - positions);
    return part1.concat(part2);
}

function findSecondLargest(numbers) {
    let unique = [...new Set(numbers)];
    if (unique.length < 2) return null;
    unique.sort((a, b) => b - a);
    return unique[1];
}

// testy//

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([]));

console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
console.log(removeDuplicates(["a", "b", "a", "c"]));

console.log(rotateArray([1, 2, 3, 4], 1));
console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([1, 2, 3], 4));

console.log(findSecondLargest([10, 20, 30, 40]));
console.log(findSecondLargest([5, 5, 5]));
console.log(findSecondLargest([100, 50, 100, 75]));