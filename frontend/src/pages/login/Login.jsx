import React from 'react'

const Login = () => {

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='h-full w-full bg-gray-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 p-2'>
            <h1 className='text-center text-3xl font-semibold'>Login <span className='text-blue-500'>ChatApp</span></h1>
            <form>
                <div>
                    <lable className = "label p-2">
                        <span className='label-text text-base'>Username</span>
                    </lable>
                    <input type="text" placeholder="kiran123" className="input input-bordered w-full h-10" />
                </div>
                <div>
                    <lable className = "label p-2">
                        <span className='label-text text-base'>Password</span>
                    </lable>
                    <input type="password" placeholder="1234567" className="input input-bordered w-full h-10" />
                </div>
                <button className="btn btn-warning btn-wide m-3" type = "submit">Login</button>
                

            </form>
             
        </div>

    </div>
  )
}

export default Login

//Started code//
// import React from 'react'

// const Login = () => {

//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='h-full w-full bg-gray-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 p-2'>
//             <h1 className='text-center text-3xl font-semibold'>Login <span className='text-blue-500'>ChatApp</span></h1>
//             <form>
//                 <div>
//                     <lable className = "label p-2">
//                         <span className='label-text text-base'>Username</span>
//                     </lable>
//                     <input type="text" placeholder="kiran123" className="input input-bordered w-full h-10" />
//                 </div>
//                 <div>
//                     <lable className = "label p-2">
//                         <span className='label-text text-base'>Password</span>
//                     </lable>
//                     <input type="password" placeholder="1234567" className="input input-bordered w-full h-10" />
//                 </div>
//                 <button className="btn btn-warning btn-wide m-3" type = "submit">Login</button>
                

//             </form>
             
//         </div>

//     </div>
//   )
// }

// export default Login