import React from 'react'
import RedSidebar from '../components/RedSidebar'
import Jaques from '../components/Jaques'
import Delivering from '../components/Deliver'
import Tables from '../components/Tables'
import {useSelector, useDispatch} from 'react-redux'

function Overview() {
  const dispatch = useDispatch();
  const overviews = useSelector((store) => store.utils.overviews)
  const bestClients = useSelector((store) => store.utils.bestClients)
  const bestClientss = useSelector((store) => store.utils.bestClientss)

  const getClass = (overview) =>{
    if(overview == "Clients"){
      return "bg-[#FFFDF7] w-[20%] h-[10vh] p-4 shadow-lg"
    }else if(overview == "Revenues"){
      return "bg-[##FFFBEE] w-[20%] h-[10vh] p-4 shadow-xl"
    }else{
      return "bg-[#FFFDF7] w-[20%] h-[10vh] p-4 shadow-lg "
    }
  }
  return (
    <div className="flex h-screen">
        <div className='h-[100%] w-[15%] '>
            <RedSidebar />
        </div>
        <div className='w-[75%] flex flex-col space-y-8'>
          <div className='w-[80%] mx-auto mt-6 flex flex-row justify-between'>
            <div>
              <h1 className="font-bold">Overview</h1>
            </div>
            <div>
              <Jaques />
            </div>
          </div>
          <div className='w-[] flex flex-row justify-around'>
          {overviews.map((overview, index) => (
              <div key={index} className={getClass(overview)}>
              <p className="text-center font-bold text-[0.70rem]">{overview.name}</p>
              <p className="text-center text-[#DD0303] font-bold">{overview.number}</p>
            </div>
          ))}
            
          </div>
          <div className="flex w-[100%] justify-center flex-row">
            <div className="w-[70%] ">
              <div className="h-[40%] bg-black">

              </div>
              <div className="bg-[#F5F7FD]  h-[60%]">
           <div className="flex justify-around mt-2">
           {bestClients.map((best, index) => (
                 <div key={index} className="w-[40%]">
                 <div className="flex bg-[#FFE7E7] p-2  w-[100%] flex-row  justify-between">
                   <div>
                     <p className="font-bold">{best.name}</p>
                     <p>Sales</p>
                   </div>
                   <div>
                     <p className="text-[#FF0000]">View details</p>
                   </div>
                 </div>
                 <div className="bg-white w-[100%] pb-2">
                  {best.clients.map((client, index) => (
                     <div key={index} className="flex  flex-row p-2 w-[90%] mx-auto bg-[#FFFDF7] shadow-lg justify-between">
                     <p>{client.name}</p>
                     <p className="text-[#FFC700]">{client.income}</p>
                   </div>
                  ))}
                 </div>
               </div>
             ))}
           </div>
           <div className="flex justify-around mt-2">
           {bestClientss.map((best, index) => (
                 <div key={index} className="w-[40%]">
                 <div className="flex bg-[#FFE7E7] p-2  w-[100%] flex-row  justify-between">
                   <div>
                     <p className="font-bold">{best.name}</p>
                     <p>Sales</p>
                   </div>
                   <div>
                     <p className="text-[#FF0000]">View details</p>
                   </div>
                 </div>
                 <div className="bg-white w-[100%] pb-2">
                  {best.clients.map((client, index) => (
                     <div key={index} className="flex  flex-row p-2 w-[90%] mx-auto bg-[#FFFDF7] shadow-lg justify-between">
                     <p>{client.name}</p>
                     <p className="text-[#FFC700]">{client.income}</p>
                   </div>
                  ))}
                 </div>
               </div>
             ))}
           </div>
              </div>
            </div>
            <div className="w-[20%] h-[75vh]">
               <Delivering />
            </div>
          </div>
          <Tables />

        </div>
    </div>
  )
}

export default Overview