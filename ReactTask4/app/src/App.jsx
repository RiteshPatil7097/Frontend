import { useState,useEffect } from 'react';
import styled from 'styled-components'
import SearchResult from './Component/SearchResult';

const BASE_URL= "http://localhost:9000/"

const App = () => {
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error,SetError]= useState("")

  useEffect(() => {
       const fetchFoodData= async() => {
          setLoading(true)
          try{
            const response= await fetch(BASE_URL)
            const json=await response.json();
            setLoading(false)
            setData(json)
          }
          catch(error){
            SetError("Unable to fetch the data")
          }
       }
       fetchFoodData() 
  },[])


  const temp={
    "name": "Boilded Egg",
    "price": 10,
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    "image": "/images/egg.png",
    "type": "breakfast"
  }

  console.log(data);
  if(error) return <div>{error}</div>
  if(loading) return <div>loading...</div>

  return (
  <Container>
     <TopBar>
        <div className="logo">
          <img src='Foody Zone.svg' alt='Logo'/>
        </div>
        <div className='search'>
          <input placeholder='Search Food....'></input>
        </div>
     </TopBar>
     <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
     </FilterContainer>
    <SearchResult data={data}/>

  </Container> 
  )
};

export default App;

const Container=styled.div`
  /* max-width: 200px; */
  margin: 0 auto;
`
const TopBar=styled.div`
    min-height: 140px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;
    .search{
        input{
           background-color: #323334;
           color: white;
           height: 40px;
           width: 280px;
           border: 1px solid red;
           border-radius: 5px;
           font-size: 16px;
           font-weight: 400;
           padding: 0 10px;
        }
    }
`

const FilterContainer=styled.section`
       display: flex;
       justify-content: center;
       gap:24px;
       margin-bottom: 20px;
`
const Button=styled.section`
  background: red;
  border-radius: 5px;
  padding: 6px 12px; 
`

