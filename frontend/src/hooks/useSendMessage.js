import React,{useState} from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
import axios from "axios"

const useSendMessage = () => {
    const [loading,setLoading] = useState(false);
    const {messages,setMessages, selectedConversation} = useConversation();

    const sendMessage = async()=>{
        setLoading(true)

        try {
            const res = await axios.post( `http://localhost:8000//api/message/send/${selectedConversation._id}`,{},{withCredentials})
            
        } catch (error) {
            
        }
        
    }



  return (
  )
}

export default useSendMessage
