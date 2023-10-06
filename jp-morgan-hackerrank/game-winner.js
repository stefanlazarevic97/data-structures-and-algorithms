function gameWinner(colors) {
    if (colors.length <= 2) return "bob"; // wendy goes first, bob wins by default

    let wendyMoves = 0;
    let bobMoves = 0;
    let counter = 1;

    for (let i = 1; i < colors.length; i++) {
        if (colors[i] === colors[i - 1]) {
            counter++;
        } else {
            if (counter >= 3) {
                if (colors[i - 1] === "w") {
                    wendyMoves += counter - 2; // for every three consecutive pieces, only one move can be made; for four pieces, two moves can be made, etc.
                } else {
                    bobMoves += counter - 2;
                }
            }

            counter = 1;
        }
    }

    if (counter >= 3) {
        if (colors[colors.length - 1] === "w") {
            wendyMoves += counter - 2;
        } else {
            bobMoves += counter - 2;
        }
    }

    return wendyMoves > bobMoves ? "wendy" : "bob";
}