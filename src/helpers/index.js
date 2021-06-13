export const setTimeoutAsync = (callback, timeoutMs) => new Promise((res) => {
    setTimeout(() => {
        callback();
        res();
    }, timeoutMs);
});
