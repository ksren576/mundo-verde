export const setTimeoutAsync = (callback, timeoutMs) => new Promise((res) => {
    setTimeout(() => {
        callback();
        res();
    }, timeoutMs);
});

export const getRndInteger = (min, max) => (
    Math.floor(Math.random() * (max - min + 1)) + min
);
