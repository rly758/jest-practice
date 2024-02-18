function capitalize(str) {
    str = str.toString();
    const index = str.search(/[a-z]/i);
    if (index !== -1) {
        str = str.replace(str[index], str[index].toUpperCase());
    }
    else {
        return "no valid characters";
    }

    return str;
};

module.exports = capitalize;