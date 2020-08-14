import { promiseConnectServices, promiseProcessData } from "../../actions/api";

async function GetServices(props) {
    const {
        abortController, Authorization, dataBody, getDataSource, nameFunction, nojson, showConsole, uriPointer,
    } = props;
    if (uriPointer) {
        if (showConsole) {
            console.log(showConsole);
            Authorization && console.log(`Authorization => ${Authorization}`);
            console.log(`uri => ${uriPointer}`);
            console.log(`dataBody`);
            console.log(dataBody);
        };
        abortController && console.log(`GetServices => ${uriPointer}`);
        let error, rawData, processData;
        [error, rawData] = await promiseConnectServices(fetch(uriPointer, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': Authorization,
                signal: abortController ? abortController.signal : undefined
            },
            body: JSON.stringify(dataBody),
        }), nojson);
        if (error) {
            console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 1(0/2)`);
            console.log(`ERROR:FETCH => ${error}`);
            console.log(`uri => ${uriPointer}`);
            dataBody && console.log(`dataBody`);
            dataBody && console.log(dataBody);
            abortController && abortController.abort();
            if (error == 'TypeError: Network request failed') return getDataSource({ error: 'Network request failed' });
            return getDataSource({ error });
        };
        if (rawData === undefined) {
            console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 1(1/2)`);
            console.log('No Data!');
            console.log(`uri => ${uriPointer}`);
            dataBody && console.log(`dataBody`);
            dataBody && console.log(dataBody);
            abortController && abortController.abort();
            return getDataSource({ data: 'No Data' });
        };
        showConsole && console.log('Complete Connect To Server');
        [error, processData] = await promiseProcessData(rawData);
        if (error) {
            console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 2(0/2)`);
            console.log(`ERROR:FETCH => ${error}`);
            console.log(`uri => ${uriPointer}`);
            dataBody && console.log(`dataBody`);
            dataBody && console.log(dataBody);
            abortController && abortController.abort();
            return getDataSource({ error });
        };
        if (processData === undefined || processData == '404') {
            console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 2(1/2)`);
            processData == '404' ? console.log(processData) : console.log('No Data!');
            console.log(`uri => ${uriPointer}`);
            dataBody && console.log(`dataBody`);
            dataBody && console.log(dataBody);
            abortController && abortController.abort();
            return getDataSource({ data: processData == '404' ? processData : 'Error converting to Json.' });
        } else {
            if (showConsole) {
                console.log('Complete Converting To JSON');
                console.log(processData);
            };
            return getDataSource(processData);
        };
    } else {
        console.log(showConsole);
        console.log(`Authorization => ${Authorization}`)
        console.log(`uri => ${uriPointer}`);
        console.log(`dataBody`);
        console.log(dataBody);
        return false;
    };
};
async function GetServicesBlob(props) {
    const {
        abortController, Authorization, dataBody, getDataSource, nameFunction, nojson, showConsole, uriPointer,
    } = props;
    showConsole && (
        console.log(`${showConsole}'Blob`),
        Authorization && console.log(`Authorization => ${Authorization}`),
        console.log(`uri => ${uriPointer}`),
        console.log(`dataBody`),
        console.log(dataBody)
    );
    abortController && console.log(`GetServicesBlob => ${uriPointer}`);
    let error, rawData, processData;
    [error, rawData] = await promiseConnectServices(RNFetchBlob.fetch(
        'POST', uriPointer, {
        Authorization: Authorization,
        'Content-Type': 'multipart/form-data',
        signal: abortController ? abortController.signal : undefined
    }, dataBody), nojson);
    if (error) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 1`);
        console.log(`ERROR:FETCH => ${error}`);
        console.log(uriPointer);
        dataBody && console.log(dataBody);
        abortController && abortController.abort();
        return getDataSource({ error });
    };
    if (rawData === undefined) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 1`);
        console.log('No Data!');
        abortController && abortController.abort();
        return getDataSource({ data: 'No Data' });
    };
    showConsole && console.log('Complete Connect To Server');
    console.log('rawData');
    console.log(rawData);
    // [error, processData] = await promiseProcessData(rawData);
    // if (error) {
    //     console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 2`);
    //     console.log(`ERROR:FETCH => ${error}`);
    //     console.log(uriPointer);
    //     dataBody && console.log(dataBody);
    //     abortController && abortController.abort();
    //     return getDataSource({ error });
    // };
    // if (processData === undefined) {
    //     console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 2`);
    //     console.log('No Data!');
    //     abortController && abortController.abort();
    //     return getDataSource({ data: 'Error converting to Json.' });
    // }
    // showConsole && ([
    //     console.log('Complete Converting To JSON'),
    //     console.log(processData),
    // ])
    return getDataSource(rawData);
};
function GetFetch(props) {
    return props.type == 'blob' ? GetServicesBlob(props) : GetServices(props);
}
export default GetFetch;