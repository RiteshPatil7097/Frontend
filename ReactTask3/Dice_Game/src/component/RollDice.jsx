import React,{useState} from 'react'
import {Button} from '../Button_btn/Button'
import styled from 'styled-components'
import Rules from './Rules'

const RollDice = ({rolldice,rolling,resetScore}) => {
      const [showrules,setShowRules]=useState(false)

  return (
    <Dice>
        <div className="dice"
             onClick={rolling}>            
            <img src={`/images/dice_${rolldice}.png`} alt="Image"></img>
        </div>
        <p>Click on Dice To Roll</p>
        <div className='btn'>
            <Button onClick={resetScore}>Reset Score</Button>
            <Button onClick={()=>setShowRules(prev=>!prev)}
                 style={{backgroundColor:'white',color:'black',border:'1px solid black'}}
            >{showrules?`Hide Rules`:`Show Rules`}</Button>
        </div>
        {showrules && <Rules />}
    </Dice>
  )
}

export default RollDice

const Dice=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        height: 250px;
        width: 250px;
    }
    p{
        font-size: 20px;
    }
    .dice{
        cursor: pointer;
    }
    .btn{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`