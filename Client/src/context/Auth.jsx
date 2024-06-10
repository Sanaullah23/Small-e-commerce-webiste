import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'

const AuthContext= createContext()

const AuthProvider =({children})=>{
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('authUser')));
    
axios.defaults.headers.common['Authorization']=auth?.TOKEN;

     
    const Logout= ()=>{
        localStorage.removeItem('authUser')
        setAuth(null)
        toast.success('logout successfully ',{
            position:"top-center",
            autoClose:200,
        
        })
        
    }
  
   useEffect(()=>{
      localStorage.setItem('authUser',JSON.stringify(auth))
   },[auth])


    return (
        <AuthContext.Provider value={{auth, setAuth, Logout}}>
                {children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=> useContext(AuthContext);

export {useAuth, AuthProvider}