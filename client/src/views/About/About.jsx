import React from "react";
import Footer from "../../components/Footer/Footer";

const about = () => {
    return (
        <div>
        <h1>Welcome to the Countries App!</h1>
        <h3>About this...</h3>
        <p>
        This App is created so that you can learn more about the countries of the world.
Here you will find all the countries of the world, with their flags and continents; In addition, in detail you will be able to know data such as what is its capital, in what subarea of the continent it is located, what area it occupies and what is its population.
You will be able to find one or several countries by name, order them by their names or by their population, and you will also be able to filter them by continent or by the tourist activities that can be carried out in them.
You will also have the possibility of creating a tourist activity, indicating its name, difficulty, duration, season in which it is carried out and assigning it to one or more countries.
        </p>
        <h4>Enjoy it!</h4>
        <Footer/>
        </div>
    )
};

export default about;