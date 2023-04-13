import SearchContainer from "../../components/SearchContainer/SearchContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
import {useLocation, useNavigate} from'react-router-dom'

const Search = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()

    const input =location.search.slice(6);

    useEffect(() => {
        dispatch(searchByName(input));
    }, []);

    return (
        <div>
            <SearchContainer/>
            <button onClick={() => navigate('/home')}>Go Back</button>
        </div>
    )
};

export default Search;