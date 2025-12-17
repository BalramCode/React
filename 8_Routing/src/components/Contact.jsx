import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()

  return (
    <div>Contact
        <button onClick={()=>navigate("/")}>Go to home</button>
        <Outlet/>
    </div>
  )
}

export default Contact