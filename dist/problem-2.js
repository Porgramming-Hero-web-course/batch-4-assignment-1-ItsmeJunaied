"use strict";
{
    // =======================================================================================================================
    // Problem 2:
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
    // =========================================================================================================================
    const removeDuplicates = (arr) => {
        let uniqueArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!uniqueArr.includes(arr[i])) {
                uniqueArr.push(arr[i]);
            }
        }
        return uniqueArr;
    };
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result);
}
