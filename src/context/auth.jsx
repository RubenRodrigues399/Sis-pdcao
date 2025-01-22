"use client"
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");
        
        if(userToken && usersStorage){
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.telefone === JSON.parse(userToken).telefone
            );

            if(hasUser) setUser(hasUser[0])
        }
    }, []);

    const login = (telefone, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.filter((user) => user.telefone === telefone);

        if(hasUser?.length){
            if(hasUser[0].telefone === telefone && hasUser[0].senha === senha){
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("user_Token", JSON.stringify({telefone, token}));
            setUser({ telefone, senha });
            return;
        }else{
            return "Telefone ou senha incorrectos";
        }
    }else{
        return "Utilizador no cadastrado";
    }
};

    const registro = (nome, genero, data_nasci, email, localidade, telefone, senha) =>{
        const usersStorage = JSON.parse(localStorage.getItem('users_db'));

        const hasUser = usersStorage?.filter((user) => user.telefone === telefone);
        
        if(hasUser?.length){
            return "Ja tem uma conta com esse numero de telefone";
        }

        let newUser;

        if(usersStorage){
            newUser = [...usersStorage, {telefone, senha}];
        }else{
            newUser = [{telefone, senha}];
        }

        localStorage.setItem('users_db', JSON.stringify(newUser));

        return;
    };

    const sair = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{user, signed: !!user, login, registro, sair}}
        >
            {children}
        </AuthContext.Provider>
    )
};
