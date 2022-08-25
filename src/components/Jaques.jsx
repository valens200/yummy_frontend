import React from 'react'
import avatar from '../assets/images/avatar.png'
import notifications from '../assets/images/notifications.png'
import search from '../assets/images/search.png'
import {showLink} from '../features/utils'
import {useDispatch} from 'react-redux'

function Jaques() {
  const dispatch = useDispatch()
  return (
     <div>
       <div  className="flex  border-b-4 border-[grey] justify-between w-[100%]">
          <img className="w-[14%] h-[3vh]"  src={search} />
          <img  className="w-[14%] h-[3vh]"  src={notifications} />
          <p className="w-[85%] mx-3  font-bold">Valens</p>
          <img  className="w-[14%] h-[3vh]"  src={avatar} />
      </div>
      <div className="flex justify-end text-end md:hidden ">
        <button  onClick={() => dispatch(showLink("open"))} className="font-bold text-end text-[3rem] ">=</button>
      </div>
     </div>
  )
}

export default Jaques