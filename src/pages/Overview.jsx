import React from 'react'
import RedSidebar from '../components/RedSidebar'
import Jaques from '../components/Jaques'
import Delivering from '../components/Deliver'
import {Link} from 'react-router-dom'
import Tables from '../components/Tables'
import RedSidebarPortal from '../components/RedSidebarPortal'
import {useSelector, useDispatch} from 'react-redux'

function Overview() {
  const dispatch = useDispatch();
  const overviews = useSelector((store) => store.utils.overviews)
  const bestClients = useSelector((store) => store.utils.bestClients)
  const bestClientss = useSelector((store) => store.utils.bestClientss)
  const showLinks = useSelector((store) => store.utils.showLinks)

  const getClass = (overview) =>{
    if(overview == "Clients"){
      return "bg-[#FFFDF7] md:w-[20%] w-[27%] h-[10vh] p-4 shadow-lg"
    }else if(overview == "Revenues"){
      return "bg-[##FFFBEE] md:w-[20%] w-[27%]  h-[10vh] p-4 shadow-xl"
    }else{
      return "bg-[#FFFDF7] md:w-[20%] w-[27%]  h-[10vh] p-4 shadow-lg "
    }
  }

  const getClassi = () => {
    if(showLinks){
      return "md:bg-white bg-[#F54749] text-white md:text-black  z-20  h-[100%]    w-[33.3%]"
    }else{
      return "md:bg-white  text-black md:text-black  z-20  h-[40%]    w-[33.3%]"
    }
  }
  return (
    <div className="flex h-screen">
        <div className='h-[100%] hidden md:block w-[15%] '>
            <RedSidebar />
        </div>
        <div className=' w-[100%] md:w-[75%] flex flex-col space-y-8'>
          <RedSidebarPortal />
          <div className='md:w-[80%] sticky md:relative  top-0 bg-white z-40 w-[90%] mb-6 md:mb-0  md:border-b-2 md:border-b-0 pb-0 md:pb-4 mx-auto mt-6 flex flex-row justify-between'>
            <div className={getClassi()}>
              <h1 className="font-bold">Overview</h1>
              <div className="pt-[8vh] block md:hidden">
               <Link to="/"> <p className="font-bold text-[2rem] text-center">YUMYY</p></Link>
            </div>
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
          <div className="flex w-[100%] justify-center flex-col space-y-8 md:flex-row md:space-y-0">
            <div className="md:w-[70%] h-[80vh] md:h-[72vh] w-[90%] mx-auto ">
              <div className="md:h-[40%] h-[40%] bg-black">

              </div>
              <div className="bg-[#F5F7FD]  h-[60%] md:h-[60%]">
           <div className="flex justify-around mt-2">
           {bestClients.map((best, index) => (
                 <div key={index} className="md:w-[40%]">
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
                 <div key={index} className="md:w-[40%]">
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
            <div className="md:w-[20%] w-[90%] mx-auto md:h-[73vh] h-[75vh]">
               <Delivering />
            </div>
          </div>
          <Tables />

        </div>
    </div>
  )
}

export default Overview