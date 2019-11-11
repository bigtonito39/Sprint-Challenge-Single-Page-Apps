import React, { useState,useEffect } from "react";

export default function SearchForm(props) {
  const [searchWord,setsearchWord]=useState("");
  const [results,SetResults]=useState([]);

  const trackChanges = event => {
    setsearchWord(event.target.value)
  }
  
  useEffect(()=> {
    const results = ""
  })

 
  return (
    <section className="search-form">
     // Add a search form here
    </section>
  );
}
