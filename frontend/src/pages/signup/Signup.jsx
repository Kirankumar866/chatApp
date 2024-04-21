import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='sm:w-3/4 flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='h-full w-full bg-gray-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 p-2 sm: w-auto'>
            <h1 className='text-center text-2xl font-semibold'>Signup <span className='text-blue-500'>ChatApp</span></h1>
            <form>
                <div>
                    <lable className = "label p-1">
                        <span className='label-text text-base'>Full Name</span>
                    </lable>
                    <input type="text" placeholder="kiran123" className="input input-bordered w-full h-10 pb-1" />
                </div>
                <div>
                    <lable className = "label p-1">
                        <span className='label-text text-base'>Username</span>
                    </lable>
                    <input type="text" placeholder="1234567" className="input input-bordered w-full h-10 pb-1" />
                </div>
                <div>
                    <lable className = "label p-1">
                        <span className='label-text text-base'>Password</span>
                    </lable>
                    <input type="password" placeholder="1234567" className="input input-bordered w-full h-10 pb-1" />
                </div>
                <div>
                    <lable className = "label p-1">
                        <span className='label-text text-base'>Confirm Password</span>
                    </lable>
                    <input type="password" placeholder="1234567" className="input input-bordered w-full h-10 pb-1" />
                </div>
                
                {/* check box */}
                <GenderCheckbox/>
                <a className='text-sm block text-left hover:underline hover:text-blue-600' href = "#">Already have an account?</a>
                <button className="btn btn-warning btn-wide m-3" type = "submit">Signup</button>
                

            </form>
             
        </div>

    </div>
  )
}

export default Signup


//Starter code //

{/*import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='sm:w-3/4 flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='h-full w-full bg-gray-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 p-2 sm: w-auto'>
            <h1 className='text-center text-2xl font-semibold'>Signup <span className='text-blue-500'>ChatApp</span></h1>
            <form>
                <div>
                    <lable className = "label p-1">
                        <span className='label-text text-base'>Full Name</span>
                    </lable>
                    <input type="text" placeholder="kiran123" className="input input-bordered w-full h-10 pb-1" />
                </div>
                <div>
                    <lable className = "label p-1">
                        <span className='label-text text-base'>Username</span>
                    </lable>
                    <input type="text" placeholder="1234567" className="input input-bordered w-full h-10 pb-1" />
                </div>
                <div>
                    <lable className = "label p-1">
                        <span className='label-text text-base'>Password</span>
                    </lable>
                    <input type="password" placeholder="1234567" className="input input-bordered w-full h-10 pb-1" />
                </div>
                <div>
                    <lable className = "label p-1">
                        <span className='label-text text-base'>Confirm Password</span>
                    </lable>
                    <input type="password" placeholder="1234567" className="input input-bordered w-full h-10 pb-1" />
                </div>
                
                <GenderCheckbox/>
                <a className='text-sm block text-left hover:underline hover:text-blue-600' href = "#">Already have an account?</a>
                <button className="btn btn-warning btn-wide m-3" type = "submit">Signup</button>
                

            </form>
             
        </div>

    </div>
  )
}

export default Signup
*/}