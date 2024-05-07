import React,{useEffect, useContext} from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import {AuthContext} from "../../main"

const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();
  const {user} = useContext(AuthContext)
 


  useEffect(()=>{
    return ()=> setSelectedConversation(null)
  },[setSelectedConversation])
  
    
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {
        !selectedConversation? (<NoChatSelected user1={user}/> ): 
    (<>
      <div className='bg-slate-400 px-4 py-3 mb-2'>
        <span className='label-text pr-2'>KP</span><span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
      </div>
      <Messages />
      <MessageInput/>
    </>)

        }
      
    </div>
  )
}

export default MessageContainer

const NoChatSelected = ({user1})=>{
  
  
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {user1.fullName}</p>
                <p>Select a chat to start messaging </p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>

            </div>

        </div>
    )
}
