{
    // =======================================================================================================================
    // Problem 3:
    // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
    // =========================================================================================================================

    const countWordOccurrences = (str: String, word: String): number => {

        let countWord: number = 0
        const strToArray: Array<string> = str.split(" ")

        for (let i = 0; i < strToArray.length; i++) {
            if (strToArray[i] === word) {
                countWord += 1
            }
        }

        return countWord
    }

    const result = countWordOccurrences("I love typescript", "typescript");

    console.log(result)
}