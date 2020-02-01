export function handleResponse(response) {

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        // if (!response.ok) {
        //     if (response.status === 401) {
        //         // auto logout if 401 response returned from api
        //         //logout();
        //         location.reload(true);
        //     }
        //     const error = (data && data.message) || response.statusText;
        //     return Promise.reject(error);
        // }

        return data;
    });
}

export function newPromise(payload,timeout=1000){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(payload);
        },timeout);
    });
}
