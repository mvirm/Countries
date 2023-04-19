import styles from './SearchBar.module.css'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { searchByName } from '../../redux/actions';

const SearchBar = (props) => {
    const dispatch = useDispatch()
    const[name, setName] = useState("");

    const handlerChange = (e) => {
        setName(e.target.value)
    }
    const handlerDispatch = () => {
        dispatch(searchByName(name));
        setName('')
    }

    return (
        <div>
            <input type='search'  value={name} onChange={handlerChange} />
            <button onClick={handlerDispatch}>Search</button> 
        </div>
    );
}



// import {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import { searchByName } from '../../redux/actions';

// const SearchBar = () => {
//     const [name, setName] = useState('');
//     const dispatch = useDispatch();
    
//     const handlerInput = (e) => {
//         setName(e.target.value)
//     }

//     const handlerSubmit = (e) => {
//         e.preventDefault();
//         dispatch(searchByName(e.target.value));
//     }
//     return(
//         <div>
//             <input type="text" value={name} placeholder="Country..." onChange={handlerInput}/>
//             <button type="submit" onClickt={(e) => dispatch(searchByName(name))}>Search</button>
//         </div>
//     )
// }

export default SearchBar