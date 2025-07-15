import React from 'react'
import styled from 'styled-components'
import { BASE_URL, Button, Container } from '../App'


const SearchResult = ({data}) => {
  return (
         <FoodCartContainer>
            <Container>
                <FoodCarts>
                {
                    data?.map( ({name,image,text,price,type})=> (
                     <FoodCard key={name}>
                          <div className='Food_image'>
                                <img src={BASE_URL + image}/>
                          </div>
                          <div className='Food_info'>
                                <h3>{name}</h3>
                                <p>{text}</p>
                                <Button style={{width:80,float:'right',marginTop:20,marginRight:20}}>${price.toFixed(2)}</Button>
                          </div>
                     </FoodCard> )
                     )
                }
            </FoodCarts>
            </Container>
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
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;
      column-gap: 30px;
      justify-content: center;
      align-items: center;
      padding-top:80px;
`
const FoodCard=styled.div`
     width: 340px;
      height: 167px;
      border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
        h3{
          margin-top: 15px;
          font-size: 20px;
        }
        p{
            margin-top: 15px;
            font-size: 13px;
        }

`