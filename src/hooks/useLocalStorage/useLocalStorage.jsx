import React, { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {

    const getLocalItem = localStorage.getItem(key)

    const [item, setItem] = useState(getLocalItem ? JSON.parse(getLocalItem) : initialValue);
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(item));
    }, [key, item]);

      return [item, setItem, key]
}

export default useLocalStorage
