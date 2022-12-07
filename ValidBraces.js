const braces = "[({})](]";

function validBraces(braces) {
    const openBraces = ["(", "[", "{"];
    let bracesArray = braces.split("");
    let tempBraces = [];
    let count = 0;

    while (count < bracesArray.length) {
        if (openBraces.includes(bracesArray[count])) {
            tempBraces.push(bracesArray[count]);
        } else if (
            (bracesArray[count] === ")" &&
                tempBraces[tempBraces.length - 1] === "(") ||
            (bracesArray[count] === "]" &&
                tempBraces[tempBraces.length - 1] === "[") ||
            (bracesArray[count] === "}" &&
                tempBraces[tempBraces.length - 1] === "{")
        ) {
            tempBraces.pop();
        } else return false;

        count++;
    }

    if (tempBraces.length === 0) {
        return true;
    } else return false;
}

console.log(validBraces(braces));
