export const createStorageItem =(itemName, storageObj)=>{
    localStorage.setItem(itemName, JSON.stringify(storageObj));
}
export const removeStorageItem =(itemName)=>{
    localStorage.removeItem(itemName);
}

export const getStorageItem =(itemName)=>{
   return  JSON.parse(localStorage.getItem(itemName));
}