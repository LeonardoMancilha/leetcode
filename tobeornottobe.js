var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

try {
    console.log(expect(5).toBe(null));
} catch (error) {
    console.error(error.message); // "Not Equal"
}

try {
    console.log(expect(5).toBe(5));
} catch (error) {
    console.error(error.message); // "Equal"
}
