// You should implement your task here.
module.exports = function towelSort(matrix) {

    if (matrix === undefined || arguments.length == 0) {
        return [];
    }
    var arr = [];
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (i % 2 === 0 || i === 0) {
                arr.push(matrix[i][j]);
            } else {
                arr.push(matrix[i][matrix[i].length - j - 1]);
            }
        }
    }
    return arr;
}
