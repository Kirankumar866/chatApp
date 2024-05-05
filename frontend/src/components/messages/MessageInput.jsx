import React, { useState } from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [messageInput,setMessageInput] = useState("");
  const {loading,sendMessage} = useSendMessage();

  const handleSubmitMessage = async(e)=>{
    e.preventDefault()
    if(!messageInput) return;
    await sendMessage(messageInput);
    setMessageInput("");
  }


  return (
    <form className='px-3 my-3' onSubmit={handleSubmitMessage}>
        <div className='w-full relative'>
            <input type='text' 
                className='border text-sm block rounded-lg w-full p-2.5 border-gray-700 bg-gray-600 text-white'
                placeholder='Send a Message'
                value={messageInput}
                onChange={(e)=>{setMessageInput(e.target.value)}}

            
            />
            <button type="submit" className='absolute flex inset-y-0 end-0 items-center justify-center bg-blue-500 w-8 h-8 rounded-full mr-3 m-auto hover:scale-110'>
            {loading? <div className="loading loading-spinner loading-xs mx-auto"></div>:<LuSendHorizonal/>}</button>
 
        </div>

    </form>
  )
}

export default MessageInput
