const reverseString = require("./reverseString");

describe("reverseString", () => {
    test("'test' becomes 'tset'", () => {
        expect(reverseString('test')).toBe('tset');
      });
      
      test("'try some spaces' becomes 'secaps emos yrt'", () => {
        expect(reverseString("try some spaces")).toBe("secaps emos yrt");
      });
      
      test("'12345' becomes '54321'", () => {
        expect(reverseString("12345")).toBe("54321");
      });
      
      test("12345 becomes 'not a string'", () => {
        expect(reverseString(12345)).toBe("not a string");
      });
});