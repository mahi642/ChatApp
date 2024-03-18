import React from 'react'
import avatar from "../../../public/User_avatar.jpg"

const Conversation = () => {
  return (
    <>
    <div className = "flex gap-2 itmes-center hover:bg-sky-500 rounded  p-2 py-1 cursor-pointer">
      <div className = 'avatar online'>
        <div className='w-12 rounded-full '>
            <img src = {avatar} alt ="user image"/>
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between' >
          <p className='font-bold text-gray-200 '>JohnDoe</p>
          <span className='text-xl'>🏏</span>
        </div>
      </div>
    </div>
    <div className=' divider my-0 py-0 h-1'/>
    </>
  )
}

export default Conversation
