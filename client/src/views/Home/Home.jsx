import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, getActivities } from "../../redux/actions";



const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
        dispatch(getActivities());
    }, []);

    return (
        <div>
            <CardsContainer/>
        </div>
    )
};

export default Home;