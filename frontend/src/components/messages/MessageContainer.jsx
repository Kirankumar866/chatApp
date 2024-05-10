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

  const fullName = selectedConversation ? selectedConversation.fullName : '';

  const words = fullName.split(' ');

  // Extract the first letter of the first word
  const firstLetter = words[0].charAt(0);

  // Extract the letter after the whitespace
  const secondLetter = words.length > 1 ? words[1].charAt(0) : '';
 
    
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {
        !selectedConversation? (<NoChatSelected user1={user}/> ): 
    (<>
      <div className='bg-slate-400 py-3 mb-2 w-full'>
        <span className='label-text p-2 text-sky-600 font-bold bg-slate-700 rounded-full'>{firstLetter.toUpperCase()}{secondLetter.toUpperCase()}</span><span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
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
