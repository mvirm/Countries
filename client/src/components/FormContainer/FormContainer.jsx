import {useState} from 'react';
import {useSelector} from 'react-redux';
import styles from './FormContainer.module.css'

const FormContainer = () => {
    const countries = useSelector(state => state.countries);
    const difficulty = [1, 2, 3, 4, 5];
    const seasons = ['Summer', 'Autumn', 'Winter', 'Spring'];
    
    const [form, setForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: '',
    });

    const [error, setError] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: '',
    });   

    const handlerChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        setError({
            ...form,
            [e.target.name]: e.target.value
        });
    };

        return (
        <form>
            <h3>Welcome to the tourist activities creation form</h3>
            <p>complete this form to create the tourist activity you want</p>
            <div>
                <label>name:</label>
                <input type="text" value={form.name} name="name" onChange={handlerChange} placeholder="name of the tourist activity"/>
                <fieldset>
                    <legend>Choise the difficulty of de tourist activity</legend>
                    <div className={styles.orden}>
                    {difficulty.map (num => {
                        return (
                            <div key={num}>
                                <input type="radio" id={num} name="difficulty" value={form.difficulty} onChange={handlerChange}/>
                                <label htmlFor={num}>{num}</label>
                            </div> 
                        )
                    })}
                    </div>
                </fieldset>
                <label>duration:</label>
                <input type="time" value={form.duration} name='duration' onChange={handlerChange}/>
                <fieldset>
                    <legend>Choose the season</legend>
                    <div className={styles.orden}>
                    {seasons.map(season => {
                        return (
                        <div key={season}>
                            <input type="radio" id={season} name="season" value={form.season} onChange={handlerChange}/>
                            <label htmlFor={season}>{season}</label>
                        </div>
                        )
                    })}
                    </div>
                </fieldset>
                <fielset>
                    <legend>Choise the countries</legend>
                    <div>
                        <select name="countries" multiple="true" onChange={handlerChange}>
                            {countries && countries.map(c => {
                                return(
                                    <option value={form.countries} key={c.id}>{c.id}-{c.name}</option>
                                )
                        })}
                        </select>
                    </div>
                </fielset>
            </div>
            <button type='submit'>Submit</button>
        </form>

    )
}

export default FormContainer