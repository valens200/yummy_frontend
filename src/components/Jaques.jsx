import React from 'react'
import avatar from '../assets/images/avatar.png'
import notifications from '../assets/images/notifications.png'
import search from '../assets/images/search.png'


function Jaques() {
  return (
      <div  className="flex justify-between w-[100%]">
          <img className="w-[14%] h-[3vh]"  src={search} />
          <img  className="w-[14%] h-[3vh]"  src={notifications} />
          <p className="w-[85%]  font-bold">Valens niyonsenga</p>
          <img  className="w-[14%] h-[3vh]"  src={avatar} />
      </div>
  )
}

export default Jaques