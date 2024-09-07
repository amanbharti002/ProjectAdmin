import { useState } from 'react'
import { LOGO_URL } from '../../URL/URL'
import './form.css'
import { SignupApi } from '../../API/api'

export function AdminSignup(){
    const [signupData,setData] =useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })
    const handlleSubmit=async(event)=>{
        event.preventDefault()
        const res = await SignupApi(signupData)
        console.log(res)
        if(res.status === "success"){
            alert(res.message)
        }
    }
    const handlleChange= (event)=>{
        setData({...signupData,[event.target.name]:event.target.value})
    }
    return(
        <>
            <div className="signupMain">
                <div className="signupMiddle">
                    <div className="signupForm">
                        <img src="file:///C:/Users/PUSH/OneDrive/Desktop/AdmitProject/myadmid/public/images/file.png" alt='logo'></img>
                        <p>Log Into Your Account</p>
                       <form autoComplete='off' onSubmit={handlleSubmit}>
                       <input type='text'  name="name" onChange={handlleChange} placeholder="Name"></input>
                        <input type='text' name="email" onChange={handlleChange} placeholder='Email'></input>
                        <input type='text' name="phone" onChange={handlleChange} placeholder='Phone'></input>
                        <input type='password'  name="password" onChange={handlleChange} placeholder='Pasword'></input>
                        <input type='submit' value="Submit" className='button'></input>
                        <input type='submit' value="Login" className='button2'></input>
                       </form>
                       
                    </div>
                </div>
            </div>
        </>
    )
}