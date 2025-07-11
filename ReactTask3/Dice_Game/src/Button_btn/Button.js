import styled from "styled-components"

export  const Button=styled.div`
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