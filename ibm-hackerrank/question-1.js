function theFinalProblem(target) {
    if (!/^[01]*$/.test(target)) {
        throw new Error("The target string must contain only binary digits (0 or 1).") // Validate the input is a binary string
    }

    // need to iterate through each character of the target string, comparing it with the expected value (EV) based on the previous flips
    // every time the character doesn't match the EV, perform a "flip" and update the EV

    let flips = 0;
    let expectedChar = "0"; // start with an initial string of all zeros

    for (let i = 0; i < target.length; i++) {
        if (target[i] !== expectedChar) {
            flips++; // if the curent character doesn't match the EV, we flip all subsequent characters
            expectedChar = expectedChar === "0" ? "1" : "0"; // after a flip, the EV will be the opposite of what it currently is
        }
    }

    return flips;

    // Time Complexity: O(n), only iterating through target string once
    // Space Complexity: O(1), fixed number of variables in the loop
}

