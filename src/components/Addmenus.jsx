import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import '../App.css'
import coffee from '../assets/images/coffee.jpg'
import Vector from '../assets/images/Vector.svg'
import {hideModal,  hideModa,   changeColor} from '../features/utils'
import Newmenu from './Newmenu'

export default function Addmenus() {
    const dispatch = useDispatch();
    const showModalform = useSelector((store) => store.utils.showModalform)
    const buttons2 = useSelector((store) => store.utils.buttons3); 
    const Tables = useSelector((store) => store.utils.Tables[0].Drinks)
    const   menuInputs = useSelector((store) => store.utils.menuInputs)
    const Resto = useSelector((store) => store.utils.Resto)
     console.log(Tables)
    
    const getClass = () => {
        if(showModalform){
            return "h-[83vh] ml-[24%] shadow-lg w-[60%]  absolute translate-y-[6%] flex flex-col space-y-3  border bg-white  z-40"
        }else{
            return "h-[85vh] ml-[20%] w-[70%]  absolute translate-y-[6%]   z-40 invisible"
        }
    }
    const getClassi = (btn) => {
        if(btn.clicked){
            return "bg-[red] text-white font-bold h-[5vh] ml-2 rounded w-[20%]"
        }else{
            return "border-[red] text-[red] ml-2 h-[5vh] rounded w-[17%] border-[2px]"
        }
    }
    const getClasse = (resto) => {
        if(resto == "Create your menu"){
            return " bg-[#DD1C1A] w-[20%] h-[3vh] text-center rounded-full text-white"
        }else{
            return "font-bold bg-red-300 text-black w-[20%] h-[3vh] text-center rounded-full text-white"
        }
    }
  return ReactDOM.createPortal(<div className={getClass()}>
  <div className= "w-[100%]">
      <button onClick={() => dispatch(hideModa())} className= "float-right hover:cursor-pointer pr-4 font-bold text-[1.5rem]">x</button>
  </div>
  <div className= "w-[96%]  mx-auto">
    <h1 className="font-bold"> Add new Menu</h1>
    <p className= "text-[#80808095] text-[0.80rem]"></p> 
  </div>
 <div className= " flex w-[100%] flex-row">
    <div className= "w-[40%] ">
        <div className="flex  h-[100%] flex-col  space-y-4">
        {Resto.map((resto, index) => (
         <div key={index} className= "flex translate-y-[19vh] h-[10vh] mx-auto justify-between flex-row w-[35%]">
              <span className={getClasse(resto)} for="name">{index + 1}</span>
              <p className="w-[80%] ml-4">{resto}</p>
          </div>
            ))}
        </div>
    </div>
<div className= "w-[60%]">
    <div className= "w-[96%]  justify-between mx-auto">
        {buttons2.map((btn, index) => (
            <button key={index}  onClick={() => dispatch(changeColor(btn))}  className={getClassi(btn)}>{btn.name}</button>
        ))}
    </div>
    <div className= "flex flex-col main  h-[50vh] mt-2 space-y-4 ">
        <form action="/" className="translate-y-20" method="post" >
        <div className="flex flex-col space-y-4">
        {menuInputs.map((input, index) => (
         <div key={index} className= "flex flex-col w-[90%]">
              <label className="font-bold">{input.label}</label>
              <input  className="border border-black rounded p-2" type={input.type} placeholder={input.placeholder} />
          </div>
            ))}
        </div>
        
        </form>
    
    </div>
</div>
 </div>
  </div>, document.getElementById("loginRoot"))
}
 