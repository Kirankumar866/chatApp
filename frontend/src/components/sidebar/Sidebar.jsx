import React from 'react'
import SearchInput from './SearchInput'
import ChatList from './ChatList'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className='border-r w-1/2 border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-2'></div>
        <ChatList className="mt-5" />
        <Logout/>



    </div>
    

  )
}

export default Sidebar