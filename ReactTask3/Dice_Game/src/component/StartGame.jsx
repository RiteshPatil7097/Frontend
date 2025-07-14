import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button_btn/Button'

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

