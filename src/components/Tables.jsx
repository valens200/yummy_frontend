import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import coffee from '../assets/images/coffee.jpg'
import {hideModal, showmoda,  changeColor} from '../features/utils'
import Addmenus from './Addmenus'
import Newmenu from './Newmenu'

export default function Tables() {
    const dispatch = useDispatch();
    const showModal = useSelector((store) => store.utils.showModal)
    const buttons2 = useSelector((store) => store.utils.buttons3); 
    const Tables = useSelector((store) => store.utils.Tables[0].Drinks)
    console.log(Tables)
    
    const getClass = () => {
        if(showModal){
            return "h-[86vh] overflow-y-scroll md:ml-[20%] ml-[3%] shadow-lg md:w-[70%]  w-[99%] absolute translate-y-[20%] md:translate-y-[6%] flex flex-col space-y-3  border bg-white  z-40"
        }else{
            return "h-[85vh] ml-[20%] w-[70%]  absolute translate-y-[6%]   z-40 invisible"
        }
    }
    const getClassi = (btn) => {
        if(btn.clicked){
            return "bg-[red] text-white font-bold h-[5vh] ml-1 rounded  md:w-[10%]"
        }else{
            return "border-[red] text-[red] ml-1 h-[5vh] rounded   md:w-[10%] border-[2px]"
        }
    }
  return ReactDOM.createPortal(<div className={getClass()}>
  <div className= "w-[100%]">
      <button onClick={() => dispatch(hideModal())} className= "float-right hover:cursor-pointer pr-4 font-bold text-[1.5rem]">x</button>
  </div>
  <div className= "w-[96%]  mx-auto">
    <h1 className="font-bold">Menus</h1>
    <p className= "text-[#80808095] text-[0.80rem]">05 of 25 May 2022,09,41 pm</p> 
  </div>
  <div className= "md:w-[96%]  w-[90%] justify-between mx-auto">
    {buttons2.map((btn, index) => (
        <button key={index}  onClick={() => dispatch(changeColor(btn))}  className={getClassi(btn)}>{btn.name}</button>
    ))}
  </div>

  <div className= "flex flex-col space-y-4 md:flex-row md:space-y-0 ">
    <div className= "flex flex-col  overflow-y-scroll h-[65vh] w-[90%] mx-auto md:w-[50%] space-y-6">
        {Tables.map((table, index) => (
            <div key={index} className= "flex h-[7vh] ml-8 justify-between bg-[#DFE6F5] rounded-l-full  w-[100%] ">
            <div className= "w-[15%] rounded-full">
                <img  className= "w-[100%] h-[100%] rounded-full" src={coffee}/>
            </div>
           <div className="w-[80%]">
            <div className= "w-[90%] translate-y-2 mx-auto"> 
            <h1 className="font-bold text-[#F54749]">{table.name}</h1>
            <p className="text-[0.75rem] text-[#F0BF12]">{table.cost + " Frws"}</p>
            </div>
           </div>
        </div>
        ))}
    </div>
    <div className=" md:w-[50%]">
        <Newmenu />
    </div>

  </div>
  </div>, document.getElementById("loginRoot"))
}
