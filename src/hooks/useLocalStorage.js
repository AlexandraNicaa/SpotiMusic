import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    // val noua e incarcare date cu un callback function
    const [state, setState] = useState(()=>{
    // daca avem date, parse them; altfel returnam val initiala

        const localStorageElement = localStorage.getItem(key);
        if(localStorageElement) {
            return JSON.parse(localStorageElement);
        }
        return initialValue;
    });

    // valoarea o salvam in Json stringify
    function handleStateChange(newValue) {
        setState(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [state, handleStateChange];
}