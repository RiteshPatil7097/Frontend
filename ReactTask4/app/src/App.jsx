import { useState,useEffect } from 'react';
import styled from 'styled-components'
import SearchResult from './Component/SearchResult';

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;


const App = () => {
  const [filteredData,setFilteredData]=useState([])
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,SetError]= useState("")
  const [selectedBtn,setSelectedBTn]=useState("All")

  const FilterFood= (type) =>{
     if(!data) return;
     if(type === "All"){
        setFilteredData(data)
        setSelectedBTn("All")
        return;
     }
    const filter=data?.filter( (food)=>
       food.type.toLowerCase().includes(type.toLowerCase()))
      setFilteredData(filter)    
      setSelectedBTn(type) 
  }

  const FilterBtn=[
    {name:"All",type:"All"},
    {name:"Breakfast",type:"Breakfast"},
    {name:"Lunch",type:"Lunch"},
    {name:"Dinner",type:"Dinner"}
  ]

  useEffect(() => {
       const fetchFoodData= async() => {
          setLoading(true)
          try{
            const response = await fetch(`${BASE_URL}/`);
            const json=await response.json();
            setLoading(false)
            setData(json);
            setFilteredData(json)
          }
          catch(error){
            SetError("Unable to fetch the data")
          }
       }
       fetchFoodData() 
  },[])

const SearchFood=(e) =>{
    const searchValue=e.target.value
    console.log(searchValue)
    if(searchValue === ""){
       setFilteredData(data)
    }
    const filter=data?.filter( (food)=> food.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredData(filter)
}

  console.log(filteredData);
  if(error) return <div>{error}</div>
  if(loading) return <div>loading...</div>

  return (
    <>
  <Container>
     <TopBar>
        <div className="logo">
          <img src='Foody Zone.svg' alt='Logo'/>
        </div>
        <div className='search'>
          <input onChange={SearchFood} placeholder='Search Food....'></input>
        </div>
     </TopBar>
     <FilterContainer>
        {FilterBtn?.map( (value)=>
            <Button 
                isSelected={selectedBtn=== value.type}
                key={value.name} 
                onClick={() => FilterFood(value.type)}>
              {value.type}
            </Button>
        )}
     </FilterContainer>
  </Container> 
  <SearchResult data={filteredData}/>
   </>
  )
};

export default App;

export const Container=styled.div`
  /* max-width: 200px; */
  margin: 0 auto;
`
const TopBar=styled.div`
    height: 140px;
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
          &::placeholder{
             color: white;
          }
        }
    }
    @media (max-width:600px){
       flex-direction: column;
       height: 120px;
       /* background-color: yellow; */
    }
`

const FilterContainer=styled.section`
       display: flex;
       justify-content: center;
       gap:24px;
       margin-bottom: 20px;
`
export const Button=styled.section`
  background: ${({isSelected}) => (isSelected ? "#e04141":"#f50909")};
  outline:1px solid ${({isSelected}) => (isSelected ? "white":"#f50909")};
  border-radius: 5px;
  padding: 6px 12px; 
  cursor: pointer;
`