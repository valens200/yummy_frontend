import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getType , setForm, openedCheckBox} from '../features/form'
import {checke} from '../features/utils'
function Delivering() {

    const deliveres = useSelector((store) => store.utils.Delivering)
    const opened = useSelector((store) => store.form.openedCheckBox);
    const availableFood = useSelector((store) => store.utils.availableFood);
 
    console.log(availableFood)
    const dispatch = useDispatch()
    const getClass = (data) => {
        if(data){
            console.log(data)
            return "bg-[red] translate-y-2 rounded w-[17%] rounded-full h-[2vh]";
           
    
        }else{
            return "bg-[white] border-[red] border-[1px] translate-y-2 rounded w-[17%] rounded-full h-[2vh]"
        }
      }
  return (
    <div className="w-[100%] pt-3 bg-[#FFF1C6]  h-[81vh]">
        <div> 
          {deliveres.map((del, index) => (
              <div key={index} className="w-[40%] h-[7vh] bg-white  mt-2 rounded shadow-lg mx-auto">
              <p className="font-bold text-center">{del}</p>
              <p className="font-[Quicksand] font-bold text-center text-[#FFC700]"> 30</p>
          </div>
          ))}
        </div>

        <div className="w-[70%] overflow-y-scroll  bg-white h-[44vh] mx-auto mt-2">
            <div className="w-[90%] sticky bg-white top-0 mx-auto" >
                <h1 className="font-bold text-[1rem]">Add Order</h1>
                <p className="font-bold text-[0.80rem]">manually</p>
                <p className=" text-[0.80rem]">create new order</p>
            </div>
            <div className="">
             {availableFood.map((food, index) => (
                   <div key={index} className="w-[80%] shadow-lg  mt-2 flex justify-between p-2 bg-[#FFF1C6] mx-auto ">
                   <div className="w-[90%]">
                       <div key={index} className=" flex w-[95%]">
                            <div onClick={()=>dispatch(checke(food.name))} className={getClass(food.checked)}></div>
                            <div className="h-[2vh] ml-2"><p>{food.name}</p></div>
                       </div>    
  
                    </div>
                      <div>
                          <button className="font-[Poppins] text-white  text-[0.70rem]  p-1 rounded bg-[#F54749]">NEW</button>
                      </div>
  
                  </div>
             ))}
            </div>

        </div>
    </div>
  )
}

export default Delivering