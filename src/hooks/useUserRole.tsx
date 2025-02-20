'use client'
import { getUserAuth } from "@/actions/auth";
import { useEffect, useState } from "react";


  export function useUserRole(){
    const [userData, setUserData] = useState<{ usuario: any; } | null>(null);

    useEffect(() => {
      const fetchUserData = async () => {
        const {usuario} = await getUserAuth(); 
        console.log("Dados do usuário:",   usuario);
    
        if (usuario) {
       setUserData(usuario)
        } else {
          console.log("Nenhum dado encontrado nos cookies.");
        }
      };
    
      fetchUserData();
    }, []);
    
    return userData?.role
  }
