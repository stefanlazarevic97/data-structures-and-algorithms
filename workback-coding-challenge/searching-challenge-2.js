// Calculate the distance between two points in the grid.
// For vertical or horizontal neighbors, use direct distance.
// For diagonal moves, use Manhattan distance as Charlie moves in a grid.
function calculateDistance(x1, y1, x2, y2) {
    if (x1 === x2 || y1 === y2) {
        // If on the same row or column, use Euclidean distance.
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    } else {
        // If diagonal, use Manhattan distance.
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    }
}

// Helper function to create a point, simplifying the process of storing coordinates.
function collectPoint(x, y) {
    return [x, y];
}

// Main function to solve the Charlie the dog challenge.
function CharlietheDog(strArr) {
    // Variables to store the important points on the grid.
    let foodLocations = [];
    let totalDistance = 0; // Total moves Charlie makes.
    let homeX, homeY; // Home coordinates.
    let charlieX, charlieY; // Charlie's starting coordinates.

    // First, find and record all important locations: Charlie's start, home, and food.
    for (let row = 0; row < strArr.length; row++) {
        for (let col = 0; col < strArr[row].length; col++) {
            switch (strArr[row][col]) {
                case 'H':
                    homeX = row;
                    homeY = col;
                    break;
                case 'C':
                    charlieX = row;
                    charlieY = col;
                    break;
                case 'F':
                    foodLocations.push(collectPoint(row, col));
                    break;
            }
        }
    }

    // Starting from home, find the nearest piece of food until all food is collected.
    let currentX = homeX;
    let currentY = homeY;
    while (foodLocations.length > 0) {
        let nearestFoodIndex = 0;
        let minDistanceToFood = Number.MAX_SAFE_INTEGER;

        // Find the nearest food piece to the current position.
        for (let i = 0; i < foodLocations.length; i++) {
            let distanceToFood = calculateDistance(currentX, currentY, foodLocations[i][0], foodLocations[i][1]);
            if (distanceToFood < minDistanceToFood) {
                minDistanceToFood = distanceToFood;
                nearestFoodIndex = i;
            }
        }

        // Update the total distance and remove the collected food from the list.
        totalDistance += minDistanceToFood;
        [currentX, currentY] = foodLocations[nearestFoodIndex]; // Move to the food location.
        foodLocations.splice(nearestFoodIndex, 1); // Remove the food from the list.
    }

    // Finally, add the distance from the last piece of food to Charlie's initial position.
    totalDistance += calculateDistance(currentX, currentY, charlieX, charlieY);

    // The total distance is the number of moves Charlie makes to collect all food and return home.
    return totalDistance;
}
