import './moviePoster.css';
import {ReactComponent as Star} from  '../../images/star.svg';

export const MoviePoster = ({imgUrl, rating, title}) => {
    return (
    <div>
        <div className='background'>
        <div className='poster'>
            <a href=''>
            <img className='img poster' src={imgUrl}></img>

            </a>
            <div className='rating'>
                <Star className='star'/>
                <h4>{rating}</h4>
            </div>
        </div>
        <h3 className='title'>{title}</h3>
    </div>
    </div>    
    );
}