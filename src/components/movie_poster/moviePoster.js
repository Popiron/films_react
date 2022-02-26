import './moviePoster.css';
import {ReactComponent as Star} from  '../../images/star.svg';

export const MoviePoster = () => {
    return (<div className='background'>
        <div className='poster'>
            <img className='img poster' src='https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg'></img>
            <div className='rating'>
                <Star className='star'/>
                <h4>6.8</h4>
            </div>
        </div>
        <h3 className='title'>Black Widow</h3>
    </div>);
}