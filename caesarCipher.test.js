const caesarCipher = require("./caesarCipher");

describe("Caesar Cipher", () => {
    test("'a', 1 shift", () => {
      expect(caesarCipher("a", 1)).toBe("b");
    });
    test("'a', 3 shift", () => {
      expect(caesarCipher("a", 3)).toBe("d");
    });
    test("'A', 1 shift", () => {
      expect(caesarCipher("A", 1)).toBe("B");
    });
    test("'A', 3 shift", () => {
      expect(caesarCipher("A", 3)).toBe("D");
    });
    test("'Test', shift 1", () => {
      expect(caesarCipher("Test", 1)).toBe("Uftu");
    });
    test("'TeSt', shift 3", () => {
      expect(caesarCipher("TeSt", 3)).toBe("WhVw");
    });
    test("'ZOO', shift 1", () => {
      expect(caesarCipher("ZOO", 1)).toBe("APP");
    });
    test("'Z O O', shift 1", () => {
        expect(caesarCipher("Z O O", 1)).toBe("A P P");
    });
    test("'!Z@o#O$', shift 1", () => {
        expect(caesarCipher("!Z@o#O$", 1)).toBe("!A@p#P$");
    }); 
    test("'1 2 3', shift 1 ", () => {
        expect(caesarCipher("1 2 3", 1)).toBe("1 2 3");
    });
  });