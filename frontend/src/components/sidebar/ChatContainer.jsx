import React from 'react'

const ChatContainer = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded cursor-pointer py-1'>
        <div className="avatar online pr-1 pl-1">
            <div className="w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt = "user avatar" />
            </div>
        </div>
        <div className='flex flex-1 justify-between gap-3'>
            
                <p className='font-bold text-gray-200'>Kiran Parasa</p>
                <span className='text-xl'>😱</span>
            
        </div>
        
    </div>
    <div className='divider my-0 py-0 h-1'></div>
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