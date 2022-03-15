import './moviePoster.css';
import {ReactComponent as Star} from  '../../../images/star.svg';
import { Link } from 'react-router-dom';

export const MoviePoster = ({movieId,imgUrl, rating, title}) => {
    return (
    <div>
        <div id='background'>
        <div className='poster'>
            <Link key={movieId} to={`/movies/${movieId}`}>
            <img className='img poster' src={imgUrl}></img>

            </Link>
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