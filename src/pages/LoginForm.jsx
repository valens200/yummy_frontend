
import React from 'react'
import '../index.css'
import '../App.css'
import {useState, useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {Link } from 'react-router-dom'
import { getType , setForm, openedCheckBox} from '../features/form'
import yummy from '../assets/images/yummy.png'
import Svg from './Svg'
 

function SignUpForm() {
  const dispatch = useDispatch();

  var signupInputs1 = useSelector((store) => store.form.inputs.loginInputs);
  const opened = useSelector((store) => store.form.openedCheckBox);
  const getType = (input) =>  {
    if(input == "Email"){
      return 'email';
    }else if(input == "password"){
      return 'password';
    }else{
      return 'text'
    }
  }
    
  const getClass = () => {
    if(opened){
        console.log(opened)
        return "bg-[red] translate-y-2 rounded w-[5%] h-[2vh]";
       

    }else{
        return "bg-[white] border-[red] border-[1px] translate-y-2 rounded w-[5%] h-[2vh]"
    }
  }
return (
  <div className="h-screen grid items-center">
 <div className="flex flex-row h-[70%] translate-y-10 border w-[96%] md:w-[50%] mx-auto">
        <div className="bg-[red] hidden md:block w-[40%] h-[100%]">
       <Link to="/"><img className="w-[70%] mx-auto" src={yummy} /></Link>
         <Svg />
        </div>
        <div className="md:w-[60%] w-[99%]"> 
        <div>

       <form method="post" onSubmit={(e) => e.preventDefault()} action="/">
        <div  className=" w-[80%] md:w-[60%] h-[60%] translate-y-[5vh] mx-auto">
        <div className=" text-center py-6">
            <h1 className="font-bold text-[red]">Sign up</h1>
          </div>
            {signupInputs1.map((input, index) => (
              <div key={index} className="mt-8 h-[6vh]">
                <input onChange={(e) => dispatch(setForm({value: e.target.value, input:input }))} type={getType(input)}  className="border rounded pl-3 w-[100%] h-[100%]"  placeholder={input}/>
              </div>
            ))}
            <div className="flex my-8 justify-between">
                <div className="flex w-[70%]">
                    <div onClick={()=>dispatch(openedCheckBox())} className={getClass()}></div>
                   <div className="h-[2vh] ml-2"><p>Remember me</p></div>
                </div>
                <div>
                    <p className="text-[red]">Forgot password ?</p>
                </div>
            </div>
            <div className="mt-8 h-[6vh]">
     <Link to="/Overview"><input type="submit" value="Login" className="bg-[red] rounded text-white h-[100%] font-bold w-[100%]" /></Link>
            </div>
            <div className="flex mt-8 mb-4 justify-between">
                <div className="w-[45%] border-b"></div>
                <div className="translate-y-3">OR</div>
                <div className="w-[45%] border-b"></div>
            </div>
            <div className="mt-6 h-[6vh]">
         <Link to="/Overview" ><input type="submit" value="Sign up" className="bg-[red] rounded text-white h-[100%] font-bold w-[100%]" /></Link>
            </div>
            <div className="flex justify-between mt-6">
              <p>Don't you have an account?</p>
              <Link to="/signup" ><p className="text-[red]">Sign up</p></Link>
            </div>
          </div>
       </form>
        </div>
        </div>
    </div>
  </div>

  )
}


export default SignUpForm