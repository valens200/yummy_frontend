import React from 'react'
import {Link} from 'react-router-dom'
import  { showModal } from '../features/utils'
import ReactDOM from 'react-dom'
import {showLink} from '../features/utils'
import {useSelector, useDispatch} from 'react-redux'
import { Slide } from 'react-reveal';


function RedSidebarPortal() {
    const dispatch = useDispatch()
    const links = useSelector((store) => store.utils.dashboarLinks);
    const links1 = useSelector((store) => store.utils.dashboarLinks2)
    const showLinks = useSelector((store) => store.utils.showLinks)
    console.log(showLinks);

    const getClass = () => {
        if(showLinks){
            return "bg-[#F54749]  fixed -translate-y-[100vh] z-20 text-white block md:hidden w-[35%] h-[100vh]"
        }else{
            return "bg-[#F54749]  -translate-y-[100vh] z-20 text-white hidden md:hidden w-[35%] h-[100vh]"
        }
    }
  return ReactDOM.createPortal(<div className={getClass()}>
            <Slide left>
            <div className="pt-[8vh]">
               <Link to="/"> <p className="font-bold text-[2rem] text-center">YUMYY</p></Link>
            </div>
            <div className="w-[60%] mt-[6vh] font-bold mx-auto">
                <ul>
                <li  onClick={() => dispatch(showModal())} className="hover:bg-white hover:cursor-pointer hover:text-black p-2 w-[100%]">Tables</li>
                    {links.map((link, index) => (
                        <Link  key={index} to={"/" + link}><li onClick={() =>dispatch(showLink("close"))}  className="hover:bg-white hover:text-black p-2 w-[100%]" key={index}>{link}</li></Link>
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
            </Slide>

        </div>, document.getElementById("portalRed"))
}

export default RedSidebarPortal