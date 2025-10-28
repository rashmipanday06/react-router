import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate= useNavigate();
    const onClickhandler=()=>{
 navigate("/dashboard", { replace: false });
    }
  return (
    <div>
        <button onClick={onClickhandler}>go to dashboard</button>
    </div>
  )
}

export default Login