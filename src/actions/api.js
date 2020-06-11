export function promiseConnectServices(promise, nojson) {
    return promise.then(data => {
        return nojson ? [null, data.text()] : [null, data.json()];
    }).catch(err => [err]);
};
export function promiseProcessData(promise) {
    return promise.then(data => {
        return [null, data]
    }).catch(err => [err])
}