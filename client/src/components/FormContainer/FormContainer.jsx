//creo la logica para el renderizado del form, creo los estados locales input y errors, seto los estado locales con el inputHandler, despacho el submit seteando los estado globales al estado inicial
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './FormContainer.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { postActivity } from '../../redux/actions';
import validation from './validation';

const FormContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const countries = useSelector(state => state.countries);
    const sortCountries = countries.sort((a, b) => {
        if(a.name > b.name) {return 1}
        if(b.name > a.name) {return -1}
        return 0
    })
    const levelsDiff = [1, 2, 3, 4, 5];
    const seasons = ['Summer', 'Autumn', 'Winter', 'Spring'];

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: []
    });

    const [errors, setErrors] = useState({        
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: ''
    });

    const inputHandler = (e) => {
        if(e.target.name === 'countryId'){
            setInput({
                ...input,
                countryId: [...input.countryId, e.target.value]//traigo todo lo que esta en el array y le concateno el nuevo valor
                
            })  
        } else {
            setInput({
                ...input,
                [e.target.name] : e.target.value
            });
        }
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }));
    };

    const deleteHandler = (id) => {
        setInput({
            ...input,
            countryId: input.countryId.filter(c => c !== id)
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(Object.keys(errors).length === 0) {
            dispatch(postActivity(input));
            alert('activity created!');
            setInput({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countryId: [], 
            });
            setErrors({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countryId: ''  
            });
            navigate('/home'); //una vez enviado el form me redirige a home        
        } else {
            alert('missing or incorrect data');
        }
    }

   return(
    <div className={styles.img}>
        <h3>Create your tourist activity </h3>
        <Link to= '/home'><button>Go Home</button></Link><span> or complete this form</span>
        <form onSubmit={submitHandler}>
            <div>
                 <label htmlFor='name'>Name:</label>
                 <input id='name' type='text'  value={input.name} name='name' placeholder='of tourist activity' onChange={inputHandler}/>
                 {errors.name ? <p className={styles.vDanger}>{errors.name}</p> : null}
            </div>
            <div>
                 <label htmlFor='difficulty'>Difficulty:</label>
                 <select name='difficulty' id='difficulty' onChange={inputHandler}>
                    <option value='' readOnly hidden>Choose...</option>
                    {levelsDiff.map(level => {
                        return(
                            <option key={level} value={level}>{level}</option>
                        )
                    })}
                </select>
                {errors.difficulty ? <p className={styles.vDanger}>{errors.difficulty}</p> : null}  
            </div>    
             <div>
                <label htmlFor='duration'>Duration:</label>
                <input  id= 'duration'type='text' value={input.duration} name='duration' placeholder='hh:mm format' onChange={inputHandler}/>
                {errors.duration ? <p className={styles.vDanger}>{errors.duration}</p> : null}
            </div>
             <div>
                <label htmlFor='season'>Season:</label>
                <select id='season' name='season' onChange={inputHandler}>
                    <option value='' readOnly hidden>Choose...</option>
                    {seasons.map(season => {
                        return(
                            <option key={season} value={season}>{season}</option>
                        )
                    })}
                </select>
                {errors.season ? <p className={styles.vDanger}>{errors.season}</p> : null}
             </div>
             <div>
                 <label htmlFor='countryId'>Countries where it is performed:</label>
                 <select name='countryId' id='countryId' onChange={inputHandler}>
                    <option value='' readOnly hidden>Choose one or more...</option>
                     {sortCountries && sortCountries.map(country => {
                        return(
                            <option key={country.id} value={country.id}>{country.id}-{country.name}</option>
                        )
                    })}
                </select>
                {errors.countryId ? <p className={styles.vDanger}>{errors.countryId}</p> : null}
            </div>
            <button type='submit'>Create</button>
        </form>
            <div>
                <label htmlFor='selected'>Selected countries</label>
                    {input.countryId && input.countryId.map(id => {
                        return(
                            <div>
                                <p key={id}>{id}</p>
                                <button onClick={() => deleteHandler(id)}>x</button>
                            </div>
                        )
                    })}
                </div>
    </div>
   )
}

export default FormContainer