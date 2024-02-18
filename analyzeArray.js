function analyzeArray(arr) {
    if (arr.length === 0) {
        return "empty array"
    }

    const length = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const average = arr.reduce((a,b) => a + b, 0) / length;

    const stats = {
        average,
        min,
        max,
        length,
    };

    return stats;
};

module.exports = analyzeArray;