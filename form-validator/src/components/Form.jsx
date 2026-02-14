import React from 'react'
import { useState } from 'react'

const Form = () => {
      const [isSubmitted, setIsSubmitted] = useState(false)
      const [username, setUsername] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const[errors,setErrors]=useState({})

    const handleFormSubmit = (e) => {
      e.preventDefault()

       if(!validateUsername(username) || !validateEmail(email) || !validatePassword(password)){
        console.log("Error")
       }

       else{
        console.log("Success")
        console.log(isSubmitted)
        console.log(username)
        console.log(email)
        console.log(password)
        setIsSubmitted(true)
       }
      }

const validateUsername = (inputusername) => {
  if (inputusername.trim().length < 6) {
    setErrors(prev => ({ ...prev, name: "Username must be at least 6 characters" }))
    return false
  } else {
    setErrors(prev => ({ ...prev, name: null }))
    return true
  }
}



const validateEmail = (inputemailvalue) => {
  if (!inputemailvalue.trim()) {
    setErrors(prev => ({ ...prev, email: "Email is required" }))
    return false
  } 
  else if (!/\S+@\S+\.\S+/.test(inputemailvalue)) {
    setErrors(prev => ({ ...prev, email: "Enter a valid email" }))
    return false
  } 
  else {
    setErrors(prev => ({ ...prev, email: null }))
    return true
  }
}




const validatePassword = (inputpasswordvalue) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/

  if (!inputpasswordvalue.trim()) {
    setErrors(prev => ({ ...prev, password: "Password required" }))
    return false
  } 
  else if (!passwordRegex.test(inputpasswordvalue)) {
    setErrors(prev => ({
      ...prev,
      password: "Weak password"
    }))
    return false
  } 
  else {
    setErrors(prev => ({ ...prev, password: null }))
    return true
  }
}




  return (
    <div>
       <div>
        <h1>Form Validator</h1>
        
        <form onSubmit={handleFormSubmit}>
             <label htmlFor="username">Enter Your Username</label>
            <input 
            type="text"
            id='username' 
            value={username}
            onChange={
                (e)=>{setUsername(e.target.value)
                 validateUsername(e.target.value)
                }
            }
            /><br/>
            <h1>{errors.name}</h1>
            

             <label htmlFor="email">Enter Your Email</label>
            <input
             type="text" 
             id='email' 
             value={email}
             onChange={(e)=>{
              setEmail(e.target.value)
              validateEmail(e.target.value)
            }}
             />
            <h1>{errors.email}</h1><br />


            <label htmlFor="password">Enter Your Password</label>
            <input 
            type="text" 
            id='password'
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
              validatePassword(e.target.value)
            }} 
            />
            <h1>{errors.password}</h1><br />

            <button
             type='submit'
            >Submit</button>
        </form>
       </div>

    </div>
  )
}

export default Form