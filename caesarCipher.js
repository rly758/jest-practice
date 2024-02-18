function caesarCipher(str,shift) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/)) {
            const index = lowerAlphabet.indexOf(str[i]);
            result += lowerAlphabet[(index + shift) % 26];
        } 
        else if (str[i].match(/[A-Z]/)) {
            const index = upperAlphabet.indexOf(str[i]);
            result += upperAlphabet[(index + shift) % 26];
        }
        else {
            result += str[i];
        }
    }

    return result;
};

module.exports = caesarCipher;