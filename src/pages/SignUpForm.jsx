
import React from 'react'
import '../index.css'
import '../App.css'
import {useState, useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {Link } from 'react-router-dom'
import { getType , setForm} from '../features/form'
import signup from '../assets/images/signup.svg'
import yummy from '../assets/images/yummy.png'
import Svg2 from '../components/Svg2'
 

function SignUpForm() {
  const dispatch = useDispatch();

  const signupInputs1 = useSelector((store) => store.form.inputs.signupInputs3);
  console.log(signupInputs1)
  const getType = (input) =>  {
    if(input == "Email"){
      console.log(input)
      return 'email';
    }else if(input == "password"){
      return 'password';
    }else{
      return 'text'
    }
  }
    
return (
  <div className="h-screen grid items-center">
 <div className="flex flex-row h-[70%] translate-y-10 border w-[96%] md:w-[50%] mx-auto">
        <div className="bg-[red] hidden md:block w-[40%] h-[100%]">
       <Link to="/" ><img className="w-[70%] mx-auto" src={yummy} /></Link>
        <Svg2 />
        </div>
        <div className="md:w-[60%] w-[99%]"> 
        <div>

       <form method="post" onSubmit={(e) => e.preventDefault()} action="/">
        <div  className=" w-[80%] md:w-[60%] h-[60%] translate-y-[5vh] mx-auto">
        <div className=" text-center py-6">
            <h1 className="font-bold text-[red]">Sign up</h1>
          </div>
            {signupInputs1.map((input, index) => (
              <div key={index} className="mt-6 h-[6vh]">
                <input onChange={(e) => dispatch(setForm({value: e.target.value, input:input }))} type={getType(input)}  className="border rounded pl-3 w-[100%] h-[100%]"  placeholder={input}/>
              </div>
            ))}
            <div className="mt-6 h-[6vh]">
          <Link to="/Overview" ><input type="submit" value="Sign up" className="bg-[red] rounded text-white h-[100%] font-bold w-[100%]" /></Link>
            </div>
            <div className="flex justify-between mt-6">
              <p>Already have an account?</p>
              <Link to="/login" ><p className="text-[red]">Login</p></Link>
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