function EvenPairs(str) {
    for (let i = 0; i < str.length; i++) {
        let num = '';
        let count = 0; // Keeps count of even numbers

        // Loop checking for a sequence of number characters
        while (i < str.length && str[i] >= '0' && str[i] <= '9') {
            num += str[i];
            let temp = parseInt(num);

            if (temp % 2 === 0) { // Validate any even numbers
                num = '';
                count++;
            }
            i++;
        }

        if (count >= 2) {
            return true;
        }
    }

    return false;
}