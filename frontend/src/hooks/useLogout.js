import React, { useState, useContext} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {AuthContext} from "../main"
import {useNavigate} from "react-router-dom"
import Cookie from "js-cookie"


export const useLogout = ()=>{
    const [loading, setLoading] = useState(false);
    const {setIsAuthorized,setUser} = useContext(AuthContext);
    const navigateTo = useNavigate();

    const logout = async()=>{
        
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:8000/api/auth/logout",
            {withCredentials:true})
            toast.success(res.data.message);
            setIsAuthorized(false)
            navigateTo("/login")
            setUser(null)
            


        } catch (error) {
            toast.error(error.response.data.message)
            setIsAuthorized(true);
            
        }finally{
            setLoading(false);
        }
    }

    return {loading,logout};
}