function addTokens(input, tokens){
    if (typeof input != 'string' ) {
        throw new Error('Invalid input');
    }
    else if(input.length < 6) {
        throw new Error('Input should have at least 6 characters');   
    }

    if(tokens) {
        tokens.forEach(el => {
            if(typeof el.tokenName != 'string')
                throw new Error('Invalid array format');
        });
    }

    if(input.includes('...')) {
        tokens.forEach(el => {
            input = input.replace('...', '${' + el.tokenName + '}');
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