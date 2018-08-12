export const setStorage = (value) => {
    if (value != undefined) {
       return localStorage.setItem('value', JSON.stringify(value));
    }
}

export const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}