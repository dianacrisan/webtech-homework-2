function addTokens(input, tokens){
    if (typeof input != 'string' ) {
        throw new Error('Invalid input');
    }
    else if(input.length < 6) {
        throw new Error('Input should have at least 6 characters');   
    }

    if(typeof tokens != '{tokenName:string}') {
        throw new Error('Invalid array format');
    }

    //If `input` don't contain any `...` return the initial value of `input`
    //If `input` contains `...`, replace them with the specific values and return the new `input`
    if(input.contains('...')) {
        tokens.forEach(el => {
            input = input.replace('...', '${' + `${el.tokenName}` + '}');
        });
        return input;
    }
    else {
        return input;
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;