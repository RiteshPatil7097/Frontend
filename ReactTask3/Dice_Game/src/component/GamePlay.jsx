import React,{useState} from 'react'
import styled from 'styled-components'
import Totalscore from './Totalscore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'

const GamePlay = () => {
  const [selectNo,setSelectNo]=useState();
  const [rolldice, setRollDice] = useState(1);
  const [score,setScore]=useState(0)
  const [error,setError] =useState("")

    const generateNo= (min,max)=>{
        console.log(Math.floor(Math.random() * (max-min) + min))
        return Math.floor( Math.random() * (max-min) + min)
    }
    const rolling= ()=>{
        if(!selectNo) {
          setError("You have not selected a number");
          return;
        }
        setError("")
        const RandomNo=generateNo(1,7)
        setRollDice((prev) => RandomNo)

        if(selectNo === RandomNo){
           setScore((prev) => (prev+RandomNo))
        }else{
           setScore((prev) => (prev-2))
        }
        setSelectNo(undefined)
    }

    const resetScore= ()=>{
       setScore(0);
    }
  return (
    <MainContainer>
        <div className='top_sec'>
          <Totalscore score={score}
                      setScore={setScore}
                      />
          <NumberSelector selectNo={selectNo} 
                        setSelectNo={setSelectNo}
                        error={error}
                        setError={setError} />
        </div>
        <div className='game_sec'>
           <RollDice rolldice={rolldice}
                    rolling={rolling}
                    resetScore={resetScore}
                    />
        </div>
        {/* {setShowRules && <Rules/>} */}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.div`
   .top_sec{
     display: flex;
     justify-content: space-around;
   }
   .game_sec{
     
   }
`