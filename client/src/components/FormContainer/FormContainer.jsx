
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './FormContainer.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { postActivity } from '../../redux/actions';
import validation from './validation';

const FormContainer = () => {
    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: []
    });

    const [errors, setErrors] = useState({});

    const inputHandle = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
        setErrors(validation({
            ...input,
            [e.target.name] : e.target.value
        }));
    };

    const checkHandleSeason = (e) =>{
        let value = e.target.value
            if(e.target.checked){
                setInput({
                    ...input,
                    season: value
                });
            };
        
    }

    const selectHandle = (e) => {
        setInput({
            ...input,
            countryId: [...input.countryId, e.target.value]//traigo todo lo que esta en el array y le concateno el nuevo valor
        })
    }

    const deleteHandle = (id) => {
        setInput({
            ...input,
            countryId: input.countryId.filter(c => c !== id)
        })
    }

    const submitHandle = (e) => {
        e.preventDefault();

            dispatch(postActivity(input));
            alert('activity created!')
            setInput({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countryId: [], 
            });
            navigate('/home') //una vez enviado el form me redirige a home        
    }

   return(
    <div>
        <h3>Create your tourist activity </h3>
        <Link to= '/home'><button>Go Home</button></Link><span> or complete this form</span>
        <form onSubmit={submitHandle}>
            <div>
                 <label for='name'>Name:</label>
                 <input id='name' type='text'  value={input.name} name='name' placeholder='of tourist activity' onChange={inputHandle}/>
                 {errors.name ? <p className={styles.vDanger}>{errors.name}</p> : null}
            </div>
            <div>
                 <label for='difficulty'>Difficulty:</label>
                 <input id='difficulty' type='text'  value={input.difficulty} name='difficulty' placeholder='lebel of difficulty:range 1 to 5' onChange={inputHandle}/>
                 {errors.difficulty ? <p className={styles.vDanger}>{errors.difficulty}</p> : null}
            </div>    

             <div>
                <label for='duration'>Duration:</label>
                <input  id= 'duration'type='time' value={input.duration} name='duration' onChange={inputHandle}/>
                {errors.duration ? <p className={styles.vDanger}>{errors.duration}</p> : null}
            </div>
             <div>
                <label>Season:</label>
                     <label for='summer'><input id='summer' type='checkbox' name='Summer' value='Summer'  onChange={(e) => checkHandleSeason(e)}/>Summer</label>
                     <label for='autumn'><input id='autumn' type='checkbox' name='Autumn' value='Autumn'  onChange={(e) => checkHandleSeason(e)}/>Autumn</label>
                     <label for='winter'><input id='winter' type='checkbox' name='Winter' value='Winter'  onChange={(e) => checkHandleSeason(e)}/>Winter</label>
                     <label for='spring'><input id='spring' type='checkbox' name='Spring' value='Spring'  onChange={(e) => checkHandleSeason(e)}/>Spring</label>
                     {errors.season ? <p className={styles.vDanger}>{errors.season}</p> : null}
             </div>
             <div>
                 <label for='countryId'>Countries where it is performed:</label>
                 <select id='countryId' onChange={selectHandle}>
                     {countries.map(c => {
                        return(
                            <option key={c.id} value={c.id}>{c.id}-{c.name}</option>
                        )
                    })}
                    {errors.countryId ? <p className={styles.vDanger}>{errors.countryId}</p> : null}
                </select>
            </div>
            <button type='submit'>Create</button>
        </form>
            <div>
                <label for='selected'>Selected countries</label>
                    {input.countryId && input.countryId.map(id => {
                        return(
                            <div>
                                <p>{id}</p>
                                <button onClick={() => deleteHandle(id)}>x</button>
                            </div>
                        )
                    })}
                </div>
    </div>
   )
}

export default FormContainer