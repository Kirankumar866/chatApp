import React from 'react'

import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'


const Home = () => {
  

  

  return (
    <div className='flex h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <Sidebar />
        <MessageContainer />
    </div>
  )
}

export default Home