import React,{useEffect, useState} from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from "react-hot-toast"

const SearchInput = () => {

  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = (e)=>{
      e.preventDefault();
      if(!search) return;
      if(search.length < 3){
        return toast.error("Search term should atleast 3 characters long")
      }
      const conversation = conversations.find((each)=> each.fullName.toLowerCase().includes(search.toLowerCase()))

      if(conversation){
        setSelectedConversation(conversation)
        setSearch("");
      }else{
        toast.error("No such user found")
      }


  }

 

  return (
    <form className='flex items-center gap-1 p-1 w-11/12' onSubmit={handleSubmit}>
      <input type="search" placeholder="     Search" className="w-full h-8 rounded-full" value={search}
				onChange={(e) => setSearch(e.target.value)}/>
      <button type="submit" className='h-[30px] w-[30px] rounded-full bg-sky-500 text-white sm:btn sm:btn-circle sm:bg-sky-600 sm:text-white flex items-center justify-center border-none'><FaSearch className='w-4 h-4 sm:w-6 sm:h-6 outline-none'/></button>

    </form>
  )
}

export default SearchInput

//Started code//
// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2 p-2'>
//       <input type="search" placeholder="     Search" className="input input-bordered input-primary rounded-full" />
//       <button type="submit" className='btn btn-circle bg-sky-500 text-white border-none'><FaSearch className='w-6 h-6 outline-none'/></button>

//     </form>
//   )
// }

// export default SearchInput