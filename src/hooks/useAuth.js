import { useLayoutEffect, useState } from "react";
import { login as loginService} from "../services/auth";
import { useLocalStorage } from "./useLocalStorage";
import { handleTokenUpdate } from "../services/utils";

const initialAuth = {
    user: null,
}

export const useAuth = () => {
    // utilizatorul curent
    const [{ user, token }, setUser] = useLocalStorage("itschool-spotimusic-user", initialAuth);

    // useLayoutEffect se intampla inainte sa se afiseze interfata
    useLayoutEffect(() => {
        handleTokenUpdate(token);
    }, [token]);

    async function login(credentials) {
        try {
            const userInfo = await loginService(credentials);
            setUser(userInfo);
        } catch (error) {
            throw error.data.message || "Error"
        }
    }

    // tot ce facem e sa setam la valoarea initiala
    function logout(){
        setUser(initialAuth);
    }

    return{
        user,
        login,
        logout,
    }
}