import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useLogout } from '../../hooks/useLogout'




const Logout = () => {

  const logout = useLogout();

  const handleLogout = async()=>{
  
    await logout();

  }

  return (
    <>
    <div className='bg-transparent pl-2 relative top-10 transition duration-300 ease-in-out transform hover:scale-105'>
        <BiLogOut className='w-6 h-6 fill-white cursor-pointer' onClick={handleLogout}/>

    </div>
    </>
    
  )
}

export default Logout