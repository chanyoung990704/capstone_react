import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

import './css/LoginComponent.css';




export default function LoginComponent(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
    const [showFailMessage, setShowFailMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()


    function handleEmailChange(event){
        setEmail(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function handleSubmit(){
        if(await authContext.login(email, password)){
            navigate('/')
        }
        else{
            setShowFailMessage(true)
        }

    }

    function handleRegister(){
        navigate('/register')
    }
    


    return (
        <div className="Login">
          {showFailMessage && <div className="errorMessage">Authentication Failed!!</div>}
          <div className="LoginForm">
            <div>
              <label>Email</label>
              <input type="email" name="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="buttonContainer">
              <button type="button" name="login" onClick={handleSubmit}>
                Login
              </button>
              <button type="button" name="register" onClick={handleRegister}>
                Register
              </button>
            </div>
          </div>
        </div>
      );

}
