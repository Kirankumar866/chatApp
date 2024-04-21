import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className="form-control pr-2">
        <label className="cursor-pointer label">
            <span className="label-text pr-2">Male</span>
            <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
        </label>
        </div>
        <div className="form-control">
        <label className="cursor-pointer label">
            <span className="label-text pr-2">Female</span>
            <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
        </label>
        </div>
    </div>
  )
}

export default GenderCheckbox

//Started code//
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className="form-control pr-2">
//         <label className="cursor-pointer label">
//             <span className="label-text pr-2">Male</span>
//             <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
//         </label>
//         </div>
//         <div className="form-control">
//         <label className="cursor-pointer label">
//             <span className="label-text pr-2">Female</span>
//             <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
//         </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox