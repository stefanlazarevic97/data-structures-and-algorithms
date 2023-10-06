function maxPlanes(startHeight, descentRate) {
    let landingTimes = startHeight.map((height, i) => height / descentRate[i]);
    landingTimes.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < landingTimes.length; i++) {
        if (landingTimes[i] > count) {
            count++;
        } else {
            break;
        }
    }

    return count;
}