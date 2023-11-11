function ArrayChallenge(strArr) {

    // Whiteboarding/problem walkthrough:

    // 1. Parse the input strings -> convert input strings into actual arrays of integers
    // 2. Iterate through and add together the elements
    //      - if both arrays have an element at a given index, add together
    //      - if only one array has an element at that index, just take that element
    // 3. Construct the resulting string, then convert back into a string and return

    const array1 = JSON.parse(strArr[0]);
    const array2 = JSON.parse(strArr[1]);

    let result = [];

    const maxLength = Math.max(array1.length, array2.length);

    for (let i = 0; i < maxLength; i++) {
        let sum = 0;

        if (i < array1.length) {
            sum += array1[i]
        }

        if (i < array2.length) {
            sum += array2[i]
        }

        result.push(sum);
    }

    return result.join('-');

    // Time complexity is O(n) as we are only iterating through the strArr once
    // Space complexity is O(n) as the size of the result is proportional to the size of the input
}

console.log(ArrayChallenge(readline()));