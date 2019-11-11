import React, { useState,useEffect } from "react";
import styled from "styled-components"

export default function SearchForm(props) {
  const [searchWord,setsearchWord]=useState("");
  const [results,SetResults]=useState([]);
  
  
  const FormStyling =styled.div `
  margin-left: 70%;
  
  `;

  const trackChanges = event => {
    setsearchWord(event.target.value)
    event.preventDefault() 
  }
  
  useEffect(()=> {
    const results = props.characters && props.characters.filter(person => person.name.toLowerCase().includes(searchWord));
    SetResults(results)
    
    
  },[])

 console.log(results)
  return (
    <section className="search-form">
      <FormStyling>
      <input 
     type="text"
     placeholder="Search by Name"
     value={searchWord}
     onChange={trackChanges}
     />

           
    </FormStyling>
  
    
    </section>
  );
}
