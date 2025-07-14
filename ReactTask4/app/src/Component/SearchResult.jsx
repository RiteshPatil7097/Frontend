import React from 'react'
import styled from 'styled-components'

const SearchResult = ({data}) => {
  return (
         <FoodCartContainer>
            <FoodCarts>
                {
                    data?.map( (food)=> (
                     <FoodCard key={food.name}>
                           {food.text}
                     </FoodCard> )
                     )
                }
            </FoodCarts>
        </FoodCartContainer>
  )
}

export default SearchResult

const FoodCartContainer=styled.section`
    background-image: url("/bg.png");
    background-size: cover;
    height: calc(100vh - 200px);
`
const FoodCarts=styled.section`
  
`
const FoodCard=styled.div`
    
`