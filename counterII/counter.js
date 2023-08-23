var createCounter = function(init) {
    let valorOriginal = init;
    
    return {
        increment() {
            return init += 1;
        },
        decrement() {
            return init -= 1;
        },
        reset() {
            return init = valorOriginal;
        },
        value() {
            return init;
        }
    };
};

module.exports = createCounter;
