import React, { useState, useContext, useEffect} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const [loading,setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(()=>{
    const getConversations = async()=>{

        setLoading(true);
        try {
            const res = await axios.get("http://localhost:8000/api/user/users",{withCredentials:true})
            setConversations(res.data.filteredUsers)

        } catch (error) {
            toast.error(error.response.data.message);
            
        }
        
    }

    getConversations()

  },[])

  return {loading,conversations}
}

export default useGetConversations
