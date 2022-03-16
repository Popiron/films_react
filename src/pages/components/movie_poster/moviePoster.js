import './moviePoster.css';
import {ReactComponent as Star} from  '../../../images/star.svg';
import { MoviesApi } from '../../../asyncActions/movies';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export const MoviePoster = ({movieId,imgUrl, rating, title}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
    <div>
        <div id='background'>
        <div className='poster'>
            <img className='img poster' src={imgUrl} onClick={async ()=>{
                await MoviesApi.fetchMovieDetails(dispatch, movieId);
                navigate(`/movies/${movieId}`,);
            }}></img>
            <div id='rating'>
                <Star id='star'/>
                <h4 id='rating_title'>{rating}</h4>
            </div>
        </div>
        <h3 id='title'>{title}</h3>
    </div>
    </div>    
    );
}