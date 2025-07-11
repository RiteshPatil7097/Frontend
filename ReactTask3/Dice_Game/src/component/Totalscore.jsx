import styled from 'styled-components'

const Totalscore = ({score}) => {
  

  return (
    <ScoreContainer>
          <h1> {score}</h1>
          <p>Total Score</p>
    </ScoreContainer>
  )
}

export default Totalscore

const ScoreContainer=styled.div`
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 100px;
        line-height: 50px;
    }
    p{
        font-weight: 700;
        font-style: bold;
        font-size: 24px;
        height: 24px;
        
    }
`