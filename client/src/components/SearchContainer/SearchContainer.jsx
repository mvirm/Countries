import Card from '../Card/Card';
import {useSelector} from 'react-redux';
import styles from './SearchContainer.module.css';

const SearchContainer = () => {

const countriesByName = useSelector(state => state.countriesByName);

    return(
        <div className={styles.container}>
            {countriesByName.map(c => {
                return <Card
                  id = {c.id}
                  name = {c.name}
                  flagImg = {c.flagImg}
                  continent = {c.continent}
                />  
            })}
        </div>
    )
}

export default SearchContainer;