import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 p-2'>
      <input type="search" placeholder="     Search" className="input input-bordered input-primary rounded-full" />
      <button type="submit" className='btn btn-circle bg-sky-500 text-white border-none'><FaSearch className='w-6 h-6 outline-none'/></button>

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