function reverseString(str) {
    if (typeof str !== "string") {
        return "not a string";
    }

    return str.split("").reverse().join("");
}

module.exports = reverseString;