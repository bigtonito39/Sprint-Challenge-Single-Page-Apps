import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters,setCharacters] = useState("")

const CardsSection = styled.section`
display:flex;
flex-wrap:wrap;
width:100%;
flex-direction:column;
flex-basis:auto;

`;
const Cards = styled.div`
border:dotted gold 5px;
margin:2%;
width:50%;
background-image: url("https://owips.com/sites/default/files/clipart/rick-and-morty-clipart/217071/rick-and-morty-clipart-white-background-217071-7825200.jpg");
padding:5%;
margin-left:20%;

`;

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then((res)=>{
      setCharacters(res.data.results)
    })
    .catch(err =>{
      console.log(err)
    })
  }, []);
console.log(characters)

  return (
    <CardsSection className="character-list">
                   
      {characters && characters.map(char =>(
      <Cards key={char.id}>
      {console.log(char)}
   <h1>{char.name}</h1>
     
      <h3>{`a/an ${char.species} thats ${char.status}`}</h3>
      <img 
      src={char.image}
      alt={char.name}
           />  
      </Cards>
      ))}
 
    </CardsSection>
    
    
    );
}
