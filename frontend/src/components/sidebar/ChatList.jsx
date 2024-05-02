import React from 'react'
import ChatContainer from './ChatContainer'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../utils/emojis'

const ChatList = () => {
  const {loading,conversations} = useGetConversations()

  
  return (
    <div className='py-2 flex flex-col overflow-auto max-h-[400px]'>
      {conversations.map((eachConversation,idx)=>
      <ChatContainer key={eachConversation._id} eachConversation = {eachConversation} emoji = {getRandomEmoji()} lastIdx = {idx === conversations.length-1}/>

    )}

    {loading && <span className="loading loading-spinner loading-xs mx-auto"></span>}

    </div>
    
  )
}

export default ChatList