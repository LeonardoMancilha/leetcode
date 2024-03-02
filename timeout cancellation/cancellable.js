const cancellable = function(fn, args, t) {
    let timeoutId;
    let cancelled = false;

    function cancelFn() {
        cancelled = true;
        clearTimeout(timeoutId);
    }

    function delayExecution() {
        if (!cancelled) {
            fn.apply(null, args);
        }
    }

    timeoutId = setTimeout(delayExecution, t);

    return cancelFn;
};

module.exports = cancellable;