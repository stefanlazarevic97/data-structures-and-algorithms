function pthFactor(n, p) {
    // to find all factors of n, we only need to iterate up to the square root of n because each factor we find with a value less than sqrt(n) will have a corresponding factor higher than sqrt(n), halving our number of required iterations

    let smallFactors = [];
    let largeFactors = [];

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) { // i IS a factor of n
            smallFactors.push(i);

            if (i !== n / i) { // pair factor of i that is larger than sqrt(n)
                largeFactors.unshift(n / i); // make sure to insert pair factor at the START of the largeFactors array, so that when we merge them, the factors are in ascending order
            }
        }
    }

    const factors = smallFactors.concat(largeFactors); // concatenate the factors less than sqrt(n) with those greater than sqrt(n)

    if (p > 0 && p <= factors.length) { // check if p-th factor exists 
        return factors[p - 1]; // p is 1-based, while factors array is 0-based
    } else {
        return 0; // p-th factor doesn't exist
    }
}