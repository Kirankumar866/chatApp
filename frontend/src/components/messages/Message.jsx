import React,{useContext} from 'react'
import {AuthContext} from "../../main"
import useConversation from '../../zustand/useConversation';

const Message = ({eachMessage}) => {
  const {user} = useContext(AuthContext);
  const {selectedConversation} = useConversation()
  const fromMe  = user?._id === eachMessage.senderId;
  
  const chatClassName = fromMe ? 'chat-end': 'chat-start';
  const profilePic = fromMe ? user.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500': "";
  const shakeClass = eachMessage.shouldShake? "shake" : ""
  
  const dateObject = new Date(eachMessage.createdAt);
  const formattedTime = dateObject.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  
  return (
    
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{eachMessage.message}</div>
                <div className='chat-footer opacity-50 text-xs flex gap-1 text-end pb-2'>{formattedTime}</div>
            </div>
        
    
  )
}

export default Message
