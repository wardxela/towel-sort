module.exports = function towelSort(matrix) {
    if (matrix && matrix.length !== 0) {
        let result = [];
        matrix.forEach((v, i) => {
            let subArray = [];
            if (i % 2 !== 0) {
                for (let j = v.length - 1; j > -1; j--) {
                    subArray.push(v[j]);
                }
            } else {
                subArray = v;
            }
            result = [...result, ...subArray];
        });
        return result;
    }
    return [];
};
