import React from "react";
import Footer from "../../components/Footer/Footer";
import styles from './About.module.css'
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.img}>
            <div className={styles.contenedor}>
                <div className={styles.titulo}>
                    <h3 className={styles.welcome}>Welcome to</h3>
                    <h1 className={styles.name}>Global Adventures</h1>
                </div>
                <div className={styles.parrafo}>
                    <p className={styles.animacion1}>This App is created so that you can learn more about the countries of the world.</p>
                    <p className={styles.animacion2}>Here you will find all the countries of the world, with their flags and continents; In addition, in detail you will be able to know data such as what is its capital, in what subarea of the continent it is located, what area it occupies and what is its population.</p>
                    <p className={styles.animacion3}>You will be able to find one or several countries by name, order them by their names or by their population, and you will also be able to filter them by continent or by the tourist activities that can be carried out in them.</p>
                    <p className={styles.animacion4}>You will also have the possibility of creating a tourist activity, indicating its name, difficulty, duration, season in which it is carried out and assigning it to one or more countries.</p>
                </div>
                <h4 className={styles.enjoy}>Enjoy it!</h4>
            </div>
                <button className={styles.btn} onClick={() => navigate('/home')}>Go Home</button>
            </div>
            <Footer/>
        </div>
    )
};

export default About;