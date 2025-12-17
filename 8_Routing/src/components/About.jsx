import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate()
    function handleClick(){
        navigate("/contact")
    }
  return (
    <div>About
        <button onClick={handleClick}>Go to contact</button>
    </div>
  )
}

export default About