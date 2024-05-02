// useSignup.js
import React, { useState, useContext} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Context} from "../main"

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {isAuthorized,setIsAuthorized,setUser} = useContext(Context);

  const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:8000/api/auth/register',
        { fullName, userName, password, confirmPassword, gender },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      
      
      
      // Assuming success means no errors and status code 201
      if (res.status === 201) {
        toast.success('User registered successfully!');
        setIsAuthorized(true)
        setUser(res.data.user)
        console.log(res.data.token)

      } else {
        console.log("Entered Axios An error occurred while registering.")
        toast.error(res.data.message);
      }
    } catch (error) {
        
      console.error('Error during signup:', error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};