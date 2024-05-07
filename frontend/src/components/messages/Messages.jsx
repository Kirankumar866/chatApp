import { useRef,useEffect } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message"
import MessageSkeleton from "../skeleton/MessageSkeleton";
import useConversation from "../../zustand/useConversation";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {

  const {loading}=useGetMessages();
  const {messages} = useConversation();
  const lastMessageRef = useRef();

  useListenMessages()

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"});
    },50)
  },[messages])

  
  
  return (
    <div className='px-4 flex-1 overflow-auto w-full'>
        {!loading && messages.length > 0 && (messages.map((eachMessage)=> <div key={eachMessage._id} ref={lastMessageRef}><Message eachMessage = {eachMessage}/></div>))}
        {loading && [...Array(6)].map((_,Idx)=> <MessageSkeleton key={Idx} />)}
        {!loading && messages.length === 0 && (<p className="text-center text-slate-800">Send a message to start the conversation</p>)}
    </div>
  )
}

export default Messages
