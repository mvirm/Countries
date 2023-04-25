import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { searchByName } from '../../redux/actions';
import styles from './SearchBar.module.css'

const SearchBar = () => {
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
            <input type='search'  value={name} onChange={handlerChange} placeholder='Country...' className={styles.input}/>
            <button onClick={handlerDispatch} className={styles.btn}>Search</button> 
        </div>
    );
}

export default SearchBar