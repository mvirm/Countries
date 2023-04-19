import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import DetailContainer from '../../components/DetailContainer/DetailContainer';
import { getCountryById } from '../../redux/actions';
import styles from './Detail.module.css';


const Detail = () => {
    const dispatch = useDispatch();
    const {detailId} = useParams();


    useEffect(() => {
        dispatch(getCountryById(detailId))
    }, [detailId])

    return (
        <div>
            <DetailContainer/>
        </div>
    )
};



export default Detail;