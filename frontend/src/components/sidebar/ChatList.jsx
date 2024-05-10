import React,{useRef,useEffect} from 'react'
import ChatContainer from './ChatContainer'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../utils/emojis'
import useConversation from '../../zustand/useConversation'


const ChatList = () => {
  const {loading,conversations} = useGetConversations()
  const {selectedConversation} = useConversation();
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current && selectedConversation) {
      const index = conversations.findIndex(
        (conversation) => conversation._id === selectedConversation._id
      );
      if (index !== -1) {
        listRef.current.children[index].scrollIntoView({ behavior: 'smooth'});
      }
    }
  }, [selectedConversation]);

  
  return (
    <div className='py-2 flex flex-col overflow-auto' ref={listRef}>
      {conversations.map((eachConversation,idx)=>
      <ChatContainer key={eachConversation._id} eachConversation = {eachConversation} emoji = {getRandomEmoji()} lastIdx = {idx === conversations.length-1}/>

    )}

    {loading && <span className="loading loading-spinner loading-xs mx-auto"></span>}
    

    </div>
    
  )
}

export default ChatList