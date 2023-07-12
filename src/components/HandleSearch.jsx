import { useState } from "react";

export function HandleSearch({hijoAPadre}) {

  
  const[idSearch, setIdSearch] = useState("");
  
  
   
  return (
    <div className="login-box">
      <p>Locations</p>
      <form >
        <div className="user-box">
          <input 
          type="text"
          placeholder="Type id location"
          onChange={(e)=> setIdSearch(e.target.value)}
           />
          <label>What place would you like to visit?</label>
        </div>

        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button onClick={ (e)=>{
            e.preventDefault 
            hijoAPadre(idSearch)}  }  className="btn-search">Search</button>
        </a>
      </form>
      <p>
        Rick & Morty /
        <a href="" className="a2">
          {" "}
          Najdorf{" "}
        </a>
      </p>
    </div>
  );
}
