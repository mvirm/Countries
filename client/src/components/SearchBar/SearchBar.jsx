import React from 'react';
import {useState} from 'react';
import{useNavigate} from 'react-router-dom'

const SearchBar = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const changeHandler = (event) => {
        setInput(event.target.value)
    }
   

    return(
        <div>
            <input type='search' value={input} onChange={changeHandler} placeholder='Country...'/>
            <button onClick={() => {navigate(`/search?name=${input}`); setInput('')}}>Search</button>
        </div>
    )
}

export default SearchBar