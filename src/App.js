import React from 'react'
import { useState } from 'react'
import Boxes from './boxes'
import Box from './Box'

import Jokes from './jokes.js';
import Joker from './joker.js';

import './App.css'
const App = () => {
  const[square ,setSquare]= useState(Boxes) 

  function toggle(id){
    setSquare(prevSquare=>{
      return prevSquare.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  
  const squareElement = square.map(square =>(
      
    <Box 
       on={square.on} 
       key={square.id} 
       id={square.id} 
       toggle={()=>toggle(square.id)}
    />
  ))

  const [fun, setFun]=useState(Joker)
  const jokeElements = fun.map(joke =>{
    return <Jokes setup={joke.setup} punchline={joke.punchline}/>
  })

  return (
    <div> 
        {jokeElements}
        <h1>boxes will go here</h1>
        {squareElement}
    </div>
  )
}

export default App

//<Jokes 
//setup="How did the hacker escape the police" 
//punchliune="<h2>He just ransomeware!</h2>"
///>

//const jokeElements = Joker.map(joke =>{
  //return <Joke setup={joke.setup} punchline={joke.punchline}/>
//})

//import Jokes from './components/jokes.js';
//import Joker from '.components/joker.js';