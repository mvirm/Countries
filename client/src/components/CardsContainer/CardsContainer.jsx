import Card from '../Card/Card';
import styles from './CardsContainer.module.css'
import {useSelector} from 'react-redux';

const CardsContainer = () => {
const countries = useSelector(state => state.countries);

    return(
        <div className={styles.container}>
            {countries.map(c => {
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

export default CardsContainer;