function subarraySum(arr) {
    let length = BigInt(arr.length);
    let sum = BigInt(0);

    for (let i = 0; i < arr.length; i++) {
        sum += BigInt(arr[i]) * (length - BigInt(i)) * (BigInt(i) + BigInt(1));
    }

    return sum.toString();
}
