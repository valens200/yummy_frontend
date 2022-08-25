import React from 'react'
import RedSidebar from '../components/RedSidebar'
import Jaques from '../components/Jaques';
import { useSelector } from 'react-redux';
import Delivering from '../components/Delivering';
import Tables from '../components/Tables';
import RedSidebarPortal from '../components/RedSidebarPortal'

function Dashboard() {
    const buttons = useSelector((store) => store.utils.buttons)
    const orders = useSelector((store) => store.utils.orders);
    const getClass = (btn) => {
        if(btn == "Orders"){
            return "border-[red] hover:bg-[#FF0000] font-bold w-[50%] border-[2px]  h-[5vh] rounded-full"
        }else{
            return "border-[red] hover:bg-white hover:border bg-[#FF0000] font-bold  h-[5vh] rounded-full text-center w-[46%]"
        }
    }
  return (
<div>
<div className="flex h-screen flex-row">
        <div className="w-[15%] hidden md:block">
            <RedSidebar />
        </div>
        <div className="md:w-[85%] w-[100%]">
        <RedSidebarPortal />
           <div className="md:w-[85%] w-[90%] mx-auto flex justify-between">
           <div className="md:w-[80%] w-[70%]">
                <div className="h-[10vh] pt-4">
                <h1 className="font-bold">Orders</h1>
                </div>
                <div className="flex  flex-row md:w-[35%] justify-between">
                    {buttons.map((btn, index) => (
                        <button key={index} className={getClass(btn)} >{btn}</button>
                    ))}

                </div>
            </div>
            <div className="w-[30%] translate-y-[9%]" >
                <Jaques />
            </div>
           </div>
        <div className="flex  flex-col md:flex-row  space-y-2 md:space-y-0 mt-8">  
           <div className="h-[81vh] w-[100%] md:mx-0 mx-auto md:w-[80%] overflow-y-scroll md:ml-5 bg-[#DCE4FF] pt-4">
         {orders.map((order, index) => (
               <div key={index} className="md:w-[98%] w-[90%] mx-auto mt-4 rounded  bg-white shadow-lg p-3 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between">
               <div className="translate-y-4">
                   <p className="text-[#F54749] font-bold">{"Order " + index + 1}</p>
               </div>
               <div>
                   <h1 className='font-bold'>{order}</h1>
                   <p>Kaffir,Vodka,lime,avocado,Ginger,Citrus</p>
                   <p className="text-[#F54749]">-- Table 1 --</p>
               </div>
               <div>
                   <p className="text-[#FFC700]">5000 frs</p>
                   <p>-- Guest --</p>
               </div>


           </div>
         ))}
            </div>
            <div className="w-[90%] md:w-[20%]">
                <Delivering />
            
            </div>
            
        </div>
        </div>

    </div>
    <Tables />
</div>
  )
}

export default Dashboard