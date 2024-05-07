import React,{useEffect,useContext} from 'react'
import { SocketContext } from '../main'
import useConversation from '../zustand/useConversation'
import notificationSound from "../assets/notification/system-notification-199277.mp3"

const useListenMessages = () => {
  const {socket} = useContext(SocketContext)
  const {messages,setMessages} = useConversation();
  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake = true
        const notification = new Audio(notificationSound);
        notification.play();
        setMessages([...messages,newMessage])


    })

    return ()=>socket?.off("newMessage")
  },[socket,setMessages,messages])
}

export default useListenMessages
