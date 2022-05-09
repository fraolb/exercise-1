import { getElementError } from '@testing-library/react'
import React from 'react'

const LearnMap = () => {
    const names=['abebe','chala','gete']
    const newName= names.map((name)=><h1>{name}</h1>)

    const clickHandler =()=>{
        alert("clicked")
    }
    
    const List =({name,age,work})=>{
        return (
            <div>
                 <h1>{name}</h1>
                 <h2>{age}</h2>
                 <h3>{work}</h3>
                 <button type="button" onClick={clickHandler}>Click me</button>
            </div>
         
        )
    }

    const arrays=[
        {
            name:"abebe",
            age:"31",
            work:"architect"
        },
        {
            name:"aster",
            age:"23",
            work:"student"
        }
    ]
   const arrayList= arrays.map((arr)=>{
       return <List name={arr.name} age={arr.age} work={arr.work} />
   })
   

    

  return (
    <div>
       {arrayList}
    </div>
  )
}

export default LearnMap