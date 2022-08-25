import React from 'react'
import RedSidebar from '../components/RedSidebar'
import Jaques from '../components/Jaques'
import RedSidebarPortal from '../components/RedSidebarPortal'
import  {useSelector , useDispatch} from 'react-redux'

function Clients() {
    const dispatch = useDispatch();
    const clients = useSelector((store) => store.utils.clients);
  return (
    <div className="flex h-screen flex-row">
        <div className="h-[100%] hidden md:block w-[15%]">
            <RedSidebar />
            <RedSidebarPortal />
        </div>
       <div className="flex flex-col space-y-4 w-[100%]">
       <div className="flex justify-between  w-[80%] mt-10 mx-auto">
            <div>
                <p className="font-bold">Clients</p>
            </div>
            <div>
                <Jaques />
            </div>
        </div>
        <div className="w-[90%] mx-auto h-[10vh] pt-2 box-border">
            <p className="">Add your self <span className="bg-[yellow] rounded text-black px-3  font-bold text-[1.5rem]">+</span></p>
        </div>
        <div className="h-[75vh] overflow-x-scroll flex flex-col space-y-2 overflow-y-scroll border  md:w-[90%] mx-auto bg-[#DCE4FF] ">
        <div className="flex flex-row justify-between w-[100%] md:w-[90%] sticky  bg-[#DCE4FF] top-0  mx-auto py-5 px-4 h-[10vh]   ">
               <div className="text-start w-[30%]">
                   <p className="font-bold">Client Name</p>
               </div>
               <div className="text-start w-[30%]">
                   <p className="text-start font-bold">Client Income</p>
               </div>
               <div className="text-start w-[30%]]">
                   <p className="text-start font-bold">Detailed Report</p>
               </div>
               <div className="w-[15%] h-[5vh]   text-center font-semibold">
                   <p className=" w-[100%]  font-bold h-[100%]">Client Category</p>
               </div>
           </div>
         {clients.map((client, index) => (  
             <div key={index} className="flex flex-row justify-between  w-[100%] md:w-[90%] mx-auto py-5 px-4 h-[10vh] rounded  bg-white shadow-lg">
               <div className="text-start w-[30%]">
                   <p className="text-[#F54749]">{client.name}</p>
               </div>
               <div className="text-start w-[30%]">
                   <p className="text-start">{client.income + " FRWS"}</p>
               </div>
               <div className="text-start w-[30%]]">
                   <p>View</p>
               </div>
               <div className=" w-[20%] md:w-[15%] h-[5vh] rounded-full  text-center font-semibold">
                   <p className="bg-[#FFEAA0] p-2 w-[100%] rounded-full h-[100%]">{client.category}</p>
               </div>
           </div>
         ))}

        </div>
       </div>
    </div>
  )
}

export default Clients