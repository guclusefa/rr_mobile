const BASE_URL = 'http://10.138.128.117:8000/api/';
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export const get = (path, params) => {
    const url = new URL(`${BASE_URL}${path}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return fetch(url, {
        method: 'GET',
        headers,
    });
}