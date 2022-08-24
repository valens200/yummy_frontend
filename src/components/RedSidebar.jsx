import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import  { showModal } from '../features/utils'
function RedSidebar() {

    const links = useSelector((store) => store.utils.dashboarLinks);
    const links1 = useSelector((store) => store.utils.dashboarLinks2)
    const dispatch = useDispatch();

  return (
     <div className="bg-[#F54749]  text-white w-[100%] h-[100%]">
            <div className="pt-[8vh]">
                <p className="font-bold text-[2rem] text-center">YUMYY</p>
            </div>
            <div className="w-[60%] mt-[6vh] font-bold mx-auto">
                <ul>
                <li  onClick={() => dispatch(showModal())} className="hover:bg-white hover:cursor-pointer hover:text-black p-2 w-[100%]">Tables</li>
                    {links.map((link, index) => (
                        <Link  key={index} to={"/" + link}><li  className="hover:bg-white hover:text-black p-2 w-[100%]" key={index}>{link}</li></Link>
                    ))}
                </ul>
                <div className=" w-[95%] translate-y-[40vh] mt-[6vh] font-bold mx-auto">
                <ul>
                    {links1.map((link, index) => (
                        <li className="hover:bg-white hover:text-black p-2 w-[100%]" key={index}>{link}</li>
                    ))}
                </ul>
                </div>

            </div>

        </div>
  )
}

export default RedSidebar