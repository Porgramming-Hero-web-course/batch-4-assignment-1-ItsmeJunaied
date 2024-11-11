{
    // =======================================================================================================================
// Problem 1:
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
// =========================================================================================================================

function sumArray(arr: Array<number>): number {
    let sum: number = 0
    for (let i: number = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}

const sum = sumArray([1, 2, 3, 4, 5])

console.log(sum)
}