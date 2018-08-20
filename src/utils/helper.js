export const setStorage = (value) => {
    if (value !== undefined) {
        return localStorage.setItem('value', JSON.stringify(value));
    }
}

export const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}
export function buildFileSelector(){
    const fileSelector = document.createElement('input');
   fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
  }