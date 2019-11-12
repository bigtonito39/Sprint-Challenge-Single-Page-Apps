import React, { useState} from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
   
 
    const handleChange = e => {
      setSearchTerm({...searchTerm,[e.target.name]:e.target.value});
      const results = props.characters.filter(character => 
        character.name.toLowerCase().includes(e.target.value)
         
      
      );
      console.log(e)
      setSearchResults(results);
      props.setCharacters(results);
     
    };
    
 
  return (
    <section className="search-form">
      <form  >
      <input
        type="search"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={handleChange}
                
      />
      <button type="submit">Submit</button>
      </form>
     
    </section>
  );

 
}
