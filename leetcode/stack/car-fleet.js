var carFleet = function (target, position, speed) {
    const times = [];

    for (let i = 0; i < position.length; i++) {
        times.push([(target - position[i]) / speed[i], position[i]]);
    }

    times.sort((a, b) => b[1] - a[1]);

    let fleets = 0;

    for (let j = 0, curTime = times[0][0]; j < times.length; j++) {
        if (times[j][0] > curTime) {
            fleets++;
            curTime = times[j][0];
        }
    }

    if (times.length > 0) fleets++;

    return fleets;
};