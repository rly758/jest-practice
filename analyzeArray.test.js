const analyzeArray = require("./analyzeArray");

describe("analyzeArray", () => {
    test("[1,8,3,4,2,6] should be {average: 4, min: 1, max: 8, length: 6}", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({average: 4, min: 1, max: 8, length: 6});
    });
    test("[0] should be {average: 0, min: 0, max: 0, length: 1}", () => {
        expect(analyzeArray([0])).toMatchObject({average: 0, min: 0, max: 0, length: 1});
    });
    test("[] should be 'empty array'", () => {
        expect(analyzeArray([])).toBe("empty array");
    });
});