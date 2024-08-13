const isSameTree = function(p, q) {
    return JSON.stringify(p) === JSON.stringify(q) && 
    p + "" === q + "";
};
