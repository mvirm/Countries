import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";



const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
    }, []);

    return (
        <div>
            <CardsContainer/>
        </div>
    )
};

export default Home;