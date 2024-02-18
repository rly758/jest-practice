const capitalize = require("./capitalize");

describe("capitalize", () => {
    test("'string' should be 'String'", () => {
        expect(capitalize("string")).toBe("String");
    });

    test("'String' should be 'String'", () => {
        expect(capitalize("String")).toBe("String");
    });

    test("'multiple word test' should be 'Multiple word test'", () => {
        expect(capitalize("multiple word test")).toBe("Multiple word test");
    });

    test("1234 should be 'no valid characters'", () => {
        expect(capitalize(1234)).toBe("no valid characters");
    });

    test("'1234' should be 'no valid characters'", () => {
        expect(capitalize("1234")).toBe("no valid characters");
    });

    test("'!@#abc!@#' should be '!@#Abc!@#'", () => {
        expect(capitalize("!@#abc!@#")).toBe("!@#Abc!@#");
    });

    test("'!@#Abc!@#' should be '!@#Abc!@#'", () => {
        expect(capitalize("!@#Abc!@#")).toBe("!@#Abc!@#");
    });
});