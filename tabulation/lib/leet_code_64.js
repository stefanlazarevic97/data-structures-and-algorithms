// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

var minPathSum = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let table = new Array(rows).fill().map(() => new Array(cols).fill(Infinity));

    table[0][0] = grid[0][0];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (j < cols - 1) {
                table[i][j + 1] = Math.min(table[i][j] + grid[i][j + 1], table[i][j + 1])
            }
            
            if (i < rows - 1) {
                table[i + 1][j] = Math.min(table[i][j] + grid[i + 1][j], table[i + 1][j])
            }
        }
    }

    return table[rows - 1][cols - 1];
};