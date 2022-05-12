import React, { useState } from "react";

const Search = ()=>{
    const[img,setImg] = useState("");
    const inputEvent=(e)=>{
        setImg(e.target.value);
    }
    return(
        <>
        <input type="text" placeholder="Search"  value={img} onChange={inputEvent}/>
        </>
    )
}
export default Search;