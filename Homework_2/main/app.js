function addTokens(input, tokens){
    if(typeof(input) !== "string")
        throw Error("Invalid input");
    if(input.length < 6)
        throw Error("Input should have at least 6 characters");
    if(!(input.includes("...")))
        return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;