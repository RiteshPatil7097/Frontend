import React from 'react'
import styled from 'styled-components'
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div className={styled.main_image}>
            <img src='./images/dices 1.png'></img>            
        </div>
        <div className="content"> 
            <h1>Dice Game</h1>
            <Button
                onClick={toggle}
            >Play Now </Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container=styled.div`
    max-width: 1180px;
    height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 150px;
    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
    
`
const Button=styled.div`
    border-radius: 5px;
    background-color: black;
    color: white;
    height: 20px;
    width: 120px;
    padding: 10px 18px;
    gap: 10px;
    text-align: center;
    margin-left:20px;
    /* float: right; */
    font-weight: 800;
    transition: 0.4s ease-in;
    cursor: pointer;

    &:hover{
        background-color: #666060;
        transition: 0.3s ease-in;
    }
`
