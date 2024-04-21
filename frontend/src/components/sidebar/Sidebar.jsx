import React from 'react'
import SearchInput from './SearchInput'
import ChatList from './ChatList'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className='p-4'>
        <SearchInput />
        <div className='divider px-2'></div>
        <ChatList />
        <Logout/>



    </div>
    

  )
}

export default Sidebar