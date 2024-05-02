import React, { useState, useContext} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Context} from "../main"
import {useNavigate} from "react-router-dom"
import Cookie from "js-cookie"

export const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const {isAuthorized,setIsAuthorized,setUser} = useContext(Context);
    const navigateTo = useNavigate();
  
    const login = async ({ userName, password}) => {
      setLoading(true);
      try {
        const res = await axios.post(
          'http://localhost:8000/api/auth/login',
          { userName, password},
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        
        
        
        // Assuming success means no errors and status code 201
        if (res.status === 200) {
          toast.success(res.data.message);
          setIsAuthorized(true)
          setUser(res.data.user)
          
          navigateTo("/")
          
  
        } else {
          console.log("Entered Axios An error occurred while login.")
          toast.error(res.data.message);
        }
      } catch (error) {
          
        console.error('Error during login:', error.response.data.message);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
  
    return { loading, login };
}


