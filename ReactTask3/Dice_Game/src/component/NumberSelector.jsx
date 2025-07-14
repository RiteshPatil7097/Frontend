import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({selectNo,setSelectNo ,setError,error}) => {
  const arr=[1,2,3,4,5,6]
  const NoselectorHandler=(value) =>{
     setSelectNo(value)
     setError("")
  }
    console.log(selectNo)
  return (
    <Noselector>
       <p className='error'>{error}</p>
       <div className='upper'>
        {
           arr.map((value,i) => (
             <Box isSelected= {value === selectNo}
                  key={i}  
                  onClick={()=>NoselectorHandler(value)}
             >{value}</Box>
           ))
        }
        </div>
        <p>Select Number</p>
    </Noselector>
  )
}

export default NumberSelector

const Noselector=styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;
    
   .upper{
        display: flex;
        gap: 24px;
    }
    p{
       font-weight: 700;
       font-style: bold;
       font-size: 24px;
       height: 36px;
    }
    .error{
      color: red;
    }
`

const Box=styled.div`
    display: grid;
    place-items: center;
    height: 72px;
    width: 72px;
    border:1px solid  black;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>
          (props.isSelected ? "black" : "white")};
    color: ${(props) => 
          (props.isSelected ? "white" : "black" )};
`
