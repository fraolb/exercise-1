import React from 'react'
import "./body.css"
import Book1 from "../img/book1.png"

const Image =()=><img src="https://images-na.ssl-images-amazon.com/images/I/71F4+7rk2eL._AC_UL127_SR127,127_.jpg"/>

const Book =()=>{
  return <article className='book' style={{color:'black',background:'white'}}>
            <img src={Book1} width="400px"/>
            <h1>Atomic Habits: An Easy & Proven Way to Build Good Habits </h1>
            <h4>James Clear</h4>
        </article>
}
const body = () => {
  return (
    <div className='bookList'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </div>
  ) 
}

export default body