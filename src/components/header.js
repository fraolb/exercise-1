import React from 'react'
import "./header.css"
import amazon from "../img/amazon.png"

const header = () => {
  return (
    <div>
        <nav className='header'>
             <img src={amazon} width='50px' />.
        </nav>
    </div>
  )
}

export default header