import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {checke, checke2, hideModa,showModal,hideModal, showModa} from '../features/utils'
import Addmenus from './Addmenus'

function Newmenu() {

    const deliveres = useSelector((store) => store.utils.Delivering)
    const opened = useSelector((store) => store.form.openedCheckBox);
    const availableFood = useSelector((store) => store.utils.buttons3);
 
    console.log(availableFood)
    const dispatch = useDispatch()
    const getClass = (data) => {
        if(data){
            return "bg-[red] translate-y-2 rounded w-[12%] rounded-full h-[2vh]";
        }else{
            return "bg-[white] border-[red] border-[1px] translate-y-2 rounded w-[12%] rounded-full h-[2vh]"
        }
      }

      const hidemodall = () => {
        dispatch(showModa())
        dispatch(hideModal())

    }
  return (
    <div className="w-[30%] mx-auto">
        <div>
            <p>Add menu <span onClick={()=> hidemodall()} className="bg-red-700 hover:cursor-pointer text-white px-2 rounded ">+</span></p>
            <p className="my-2">Create new menu</p>
            <div className="w-[100%]">
            <button className="bg-[red] text-white w-[60%] h-[4vh] rounded">Remove</button>
           </div>
            <div className="flex flex-col mt-8 overflow-y-scroll h-[53vh] space-y-3">
           {availableFood.map((food, index) => (
         <div key={index} className=" flex w-[95%]">
             <div onClick={()=>dispatch(checke2(food.name))} className={getClass(food.checked)}></div>
             <div className="h-[2vh] ml-2"><p>{food.name}</p></div>
         </div>
           ))}
            </div>
        </div>
          <Addmenus />
    </div>
  )
}

export default Newmenu