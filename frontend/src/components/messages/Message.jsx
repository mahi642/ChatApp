import React from 'react'
import avatar2 from "../../../public/User_avatar.jpg"
const Message = () => {
  return (
    <div className=' chat chat-end'>
        <div className='chat-image avatar'>
         <div className='w-10 rounded-full'>
            <img src={avatar2} alt="chatbubble" />
         </div>
        </div>

      <div className='chat-bubble text-white bg-blue-500'>Hi....How u doinnn</div>
      <div className='chat-ffoter opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message
