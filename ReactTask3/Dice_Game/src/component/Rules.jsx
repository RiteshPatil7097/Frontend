import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play Dice Game</h2>
        <ul>
            <li>Select any Number</li>
            <li>Click on dice Image</li>
            <li>After clicking on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>if you get wrong guess then  2 point will be dedcuted </li>
        </ul>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
   background-color: #FBF1F1;
   max-width: 800px;
   margin: 0% auto;
   border-radius: 10px;
   margin-top: 20px;
   padding: 10px;
    ul{
        list-style: none;
        margin-top: 24px;
    }
    h2{
        font-size:24px;

    }
`