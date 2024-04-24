import React from 'react'
import { LuSendHorizonal } from "react-icons/lu";

const MessageInput = () => {
  return (
    <form className='px-3 my-3'>
        <div className='w-full relative'>
            <input type='text' 
                className='border text-sm block rounded-lg w-full p-2.5 border-gray-700 bg-gray-600 text-white'
                placeholder='Send a Message'
            
            />
            <button type="submit" className='absolute flex inset-y-0 end-0 items-center justify-center bg-blue-500 w-8 h-8 rounded-full mr-3 m-auto hover:scale-110'><LuSendHorizonal/></button>
 
        </div>

    </form>
  )
}

export default MessageInput
