function ArrayChallenge(arr) {
    while (arr.length > 1) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(Math.abs(arr[i + 1] - arr[i]));
        }
        arr = newArr;
    }
    return arr[0];
}