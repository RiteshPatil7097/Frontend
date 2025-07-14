import { useState } from 'react'
import styled from "styled-components"
import StartGame from './component/StartGame'
import GamePlay from './component/GamePlay'





function App() {
  const [isGameStarted, setGameStarted] = useState(0)
  const toggleGamePlay=()=>{
     setGameStarted((prev) => !prev)
  }

  return (
      <div>
        {
          isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
        }
      </div>   
  )
}

export default App
