import React from 'react'
import yummy from '../assets/images/yummy.png'
import Jaques from '../components/Jaques'
import coffee from '../assets/images/coffee.jpg'
import man from '../assets/images/man.png'
import dancing from '../assets/images/dancing.png'
import '../App.css'
import running from '../assets/images/running.png'
import { Link } from 'react-router-dom'

const images = [man, coffee, man];
const cards = [
    {
        image:dancing,
        title:"Easy to Use",
        description:"It is easy to use this app as  nothing more than registering your restaurant and making your menu. The rest is our duty "
    },
    {
        image:running,
        title:"Fastest",
        description:"It is easy to use this app as  nothing more than registering your restaurant and making your menu. The rest is our duty "
    },
    {
        image:dancing,
        title:"Earn more money",
        description:"It is easy to use this app as  nothing more than registering your restaurant and making your menu. The rest is our duty "
    }
]

const footerContents = [
    {
        header:"Our social medias",
        links:['Facebook', 'Twitter', 'Whatsapp', 'Phone: 0782825742']
    },
    {
        header:"Contacts",
        links:[ '+25078825742',  '+250782825742']
    },
    {
        header:"Contacts us via Email",
        links:['uwavalens2003@gmail.com', 'murangwagisa@gmail.com']
    },
]

function Home() {
    const getClass = (index) => {
        if(index == 1){
            return "rounded-full w-[30%] h-[6vh] -translate-x-20 z-40"
        }else if(index == 2){
            return "rounded-full w-[30%] h-[6vh] -translate-x-40 z-40 "
        }else{
            return "rounded-full w-[30%] h-[6vh]"
        }
    }
  return (
 <div>
       <div className="h-screen bg-[#E5E5E5]  w-[100%] pt-10">
        <di v className="flex flex-row justify-between  w-[80%] mx-auto">
            <div>
                <img className="w-[70%]" src={yummy} alt="logo image" />
            </div>
            <div>
                <Jaques />
            </div>
        </di>
        <div className="flex flex-col-reverse md:flex-row  h-[85vh] w-[90%] md:w-[70%] mx-auto">
            <div className="md:w-[60%] h-[100%] ">
              <div className="w-[] h-[50vh] mb-[40%] mt-[80%] md:mt-0 md:mb-0 translate-y-[17vh]">
                <p className="bg-[#FFDFE1] md:w-[40%] my-2 p-2 rounded-full text-[#FE0000] text-center">More than faster</p>
                <h1 className="text-[2.5rem] font-bold">Register Your <span className="text-[#F54749]">Restaurant</span></h1>
                <h1 className="text-[2.5rem] font-bold">on <span className="text-[#F54749]">Yummy</span></h1>
                <div className="font-bold">
                    <p>Boost your restaurant business for free</p>
                    <p>an receive much more revenue</p>
                </div>
                <div className= " w-[99%] md:w-[60%] mt-6  flex justify-between">
            <Link className="btn bg-[#F54749] text-center pt-2 hover:bg-white  border-[#F54749] border-[1px] h-[6.5vh] hover:text-[#F54749] md:h-[6vh] w-[45%] rounded-full" to="/signup"><button >Register your resto</button></Link>
            <Link  className="btn bg-white  hover:bg-[#F54749] text-center pt-2 hover:text-black text-[#F54749] border-[#F54749] border-[1px] h-[6.5vh] w-[45%] rounded-full"  to="/login"><button>Sign in your resto</button></Link>
                </div>
              </div>
              <div>
               <div className="flex ">
               <div className="flex flex-row  w-[30%] mt-20">
                    {images.map((img,index) => (
                        <img  className={getClass(index)} key={index}  src={img} alt="image"/>
                    ))}
                    
                </div>
                <div className="w-[70%]  mt-20">
                    <p className="font-bold">Our Happy Cutomers</p>
                    <p><span className="font-bold">7,8 </span><span>(1.5k reviews)</span></p>
                </div>
               </div>
              </div>

            </div>
            <div className="md:w-[40%] mx-auto md:translate-y-0 translate-y-[65vh] h-[100%]">
            <div className="md:w-[90%] w-[99%]  bg-[red] z-100 -translate-x-10 rounded-full mx-auto translate-y-[24%] md:translate-y-[40%]  h-[60%]">
            </div>
            <img className="z-40    mx-auto h-[60%] -translate-x-[10vh] md:h-[60vh] -translate-y-[40vh]  md:-translate-y-[46vh]" src={man} />
            <div className="w-[]  -translate-y-[53vh] md:-translate-y-[65vh] z-10 ">
                <div className="flex flex-row  md:h-[7vh]">
                    <div className="md:w-[50%] w-[90%]  justify-between rounded-l-full rounded-r-full p-2 bg-white flex flex-row h-[100%]">
                        <div className="md:w-[17%]  w-[25%] rounded-full  bg-[red]">

                        </div>
                        <div>
                            <p className="font-bold">Yummy</p>
                            <p>Your partner</p>
                        </div>
                        <div className="w-[25%]  rounded-full  bg-[red]">

                        </div>
                    </div>
                    <div className="w-[60%]  hidden md:block h-[100%] ">
                    
                    </div>
                </div>
            <div className="flex md:mt-0 mt-3 flex-row h-[9vh]   md:h-[8vh]">
                   <div className="w-[70%] hidden md:block h-[100%] ">
                    
                    </div>
                    <div  className="md:w-[50%] w-[90%]  p-2 justify-between rounded-l-full  bg-white flex flex-row h-[100%]">
                    <div className="w-[22%] h-[97%] rounded-full  bg-[red]">

                    </div>
                        <div>
                            <p className="font-bold">Rate your resto</p>
                            <p>Your partner</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
           </div>
               
            </div>
            </div>
        </div>
          <div className="h-[100vh] md:pt-0 pt-[75%] bg-[#E5E5E5]">
            <div className="md:w-[50%] mx-auto text-center">
                <p className="text-[#F54749] text-[1.4rem]">Why us</p>
                <p className="font-bold text-[1.7rem]">Why Your Restaurant’s Best</p>
                <p className="font-bold text-[1.7rem]">Maker Partner</p>
            </div>
            <div className="flex bg-[#E5E5E5]  mt-[6%]  flex-col md:flex-row space-y-5 md:space-y-0 md:w-[80%] justify-between mx-auto">
             {cards.map((card, index) => (
                   <div key={index} className="md:w-[30%] w-[90%] mx-auto shadow-lg rounded p-4 bg-white">
                   <img className="w-[100%] h-[30vh]" src={card.image}  alt="dancing child"/>
                   <div>
                       <p className="text-[#F54749] text-center">{card.title}</p>
                       <p className="mt-4 text-[0.80rem]">{card.description} </p>
                   </div>
               </div>
             ))}
            </div>
            <div className="hi bg-[#E5E5E5] h-[70vh]">
                <div className="w-[90%] h-[65%] flex flex-col md:flex-row  md:space-y-0 space-y-4 justify-between  translate-y-[43%] md:translate-y-[78%] mx-auto">
                   {footerContents.map((content, index) => (
                    <div key={index} className="">
                        <p className="text-white font-bold md:h-[6vh]">{content.header}</p>
                        <ul>
                            {content.links.map((link, index) => (
                                <li  className="mt-1 hover:underline"key={index}  >{link}</li>
                            ))}
                        </ul>
                    </div>
                    
                   ))}

                </div>
               
            </div>

          </div>
 </div>
  )
}

export default Home