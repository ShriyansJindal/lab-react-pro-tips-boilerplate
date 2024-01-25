import React, { useState } from 'react'
import "./Form.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = () => {
  let focusState={
    
    firstname:false,
    lastname:false,
    email:false,
    phoneNo:false,

}
    let [formData,setFormdata] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phoneNo:"",
    })
    let [alert,setAlert] = useState(
      {
        firstname:"",
        lastname:"",
        email:"",
        phoneNo:"",
    })
    let [register,setRegister] = useState(false)
    let [focus,setFocus] = useState(focusState)
    let handleChange=(e)=>{
      let {name,value} = e.target

      // console.log(name,value)
      // name = e.target.name
      setFormdata(prev=>({...prev, [name] :value}))
      // console.log(name)

    }
    let handleFocue=(name)=>{
      // setFocus(prev=>({...prev,[name]:true}))
      let obj = {
        firstName:false,
        lastName:false,
        email:false,
        phno:false
      }
  
      obj[name] = true
  
      setFocus(obj)
    }
    // console.log(formData)

    let handleSubmit=(e)=>{
      e.preventDefault()
      let messageBox={}

        if(formData.firstname===""){
          messageBox.firstname="Please enter your first name"
        }
        else{
          messageBox.firstname=""
        }
        if(formData.lastname===""){
          messageBox.lastname="Please enter your last name"
        }
        else{
          messageBox.lastname=""
        }
        if(formData.email===""){
          messageBox.email="Please enter your email"
        }
        else{
          messageBox.email=""
        }
        if(formData.phoneNo===""){
          messageBox.phoneNo="Please enter your phone number"
        }
        else if(!/^\d{10}$/.test(formData.phoneNo)){
          messageBox.phoneNo="Please enter 10 digit number"
        }
        else{
          messageBox.phoneNo=""
        }
      

      setAlert(messageBox)
      console.log(messageBox)
      
      if(messageBox.firstname=="" &&  messageBox.lastname=='' && messageBox.email=='' && messageBox.phoneNo==''){
        setRegister(true)
        notify()
        // console.log("The form data is")
      } 

    }
    const notify = () => toast("Registration Success !!");
    
  return (
    <div className='contain'>
    <form action="" onSubmit={handleSubmit}>
    {/* <div>
    
      {register && (<div className='registration-success'>
        Registration Successfull !!
      </div>
      )}
    </div> */}
      <label htmlFor="">
        <input type="text" name='firstname' value={formData.firstname} onChange={handleChange} onFocus={()=>handleFocue("firstname")} style={{borderColor: focus.firstname ? "blue":"gray", outline:"none"}} placeholder='Enter your first name' />
        <div style={{color:"red"}}>{alert.firstname}</div>
      </label>
      <label htmlFor="">
        <input type="text" name='lastname' value={formData.lastname} onChange={handleChange} onFocus={()=>handleFocue("lastname")} style={{borderColor: focus.lastname ? "blue":"gray" , outline:"none"}} placeholder='Enter your last name' />
        <div style={{color:"red"}}>{alert.lastname}</div>
      </label>
      <label htmlFor="">
        <input type="email" name='email' value={formData.email} onChange={handleChange} onFocus={()=>handleFocue("email")} style={{borderColor: focus.email ? "blue":"gray" , outline:"none"}} placeholder='Enter your Email' />
        <div style={{color:"red"}}>{alert.email}</div>
      </label>
      <label htmlFor="">
        <input type="number" name='phoneNo'  value={formData.phoneNo} onChange={handleChange} onFocus={()=>handleFocue("phoneNo")} style={{borderColor: focus.phoneNo ? "blue":"gray" , outline:"none"}} placeholder='Enter Your Phone Number' />
        <div style={{color:"red"}}>{alert.phoneNo}</div>
      </label>
      <input type="submit" value={"Register"}  />
      </form>    
      <ToastContainer  position="top-center"/>
    </div>
  )
}

export default Forms