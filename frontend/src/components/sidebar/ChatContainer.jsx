import React, { useContext } from 'react'
import useConversation from '../../zustand/useConversation';
import { SocketContext } from '../../main';

const ChatContainer = ({eachConversation,emoji,lastIdx}) => {

  const {selectedConversation,setSelectedConversation} = useConversation();
  const isSelected = eachConversation?._id === selectedConversation?._id;
  const {onlineUsers} = useContext(SocketContext)

  const isOnline = onlineUsers.includes(eachConversation._id)



  
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-400 rounded cursor-pointer py-1 ${isSelected ? "bg-sky-500" : ""}`} onClick={() => setSelectedConversation(eachConversation)}>
        <div className={`avatar ${isOnline ? "online": ""}`}>
            <div className="w-10 sm:w-12 rounded-full">
                <img src={eachConversation.profilePic} alt = "user avatar" />
            </div>
        </div>
        <div className='flex flex-1 justify-between gap-3'>
            
                <p className='text-xs sm:text-sm font-bold text-gray-200'>{eachConversation.fullName}</p>
                <span className='text-xl'>{emoji}</span>
            
        </div>
      
    </div>
    {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
}

export default ChatContainer

//Started code//
// import React from 'react'

// const ChatContainer = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-sky-500 rounded cursor-pointer py-1'>
//         <div className="avatar online pr-1 pl-1">
//             <div className="w-12 rounded-full">
//                 <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt = "user avatar" />
//             </div>
//         </div>
//         <div className='flex flex-1 justify-between gap-3'>
            
//                 <p className='font-bold text-gray-200'>Kiran Parasa</p>
//                 <span className='text-xl'>😱</span>
            
//         </div>
        
//     </div>
//     <div className='divider my-0 py-0 h-1'></div>
//     </>
//   )
// }

// export default ChatContainer