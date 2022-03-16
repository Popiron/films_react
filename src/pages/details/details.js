import { useSelector } from 'react-redux';
import { Navbar } from '../components/navbar/navbar';

import './details.css';

const Details = () => {
    const details = useSelector(state => state.details);

    return (<>
        <Navbar isInsideProfile={false} />
        <img id='backdrop' width="100%" src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}></img>
        <div id='wrapper'>
            <img id='logo' src={`https://image.tmdb.org/t/p/original${details.poster_path}`}></img>
            <div id='box2'>
                <div id='details_title'>
                    {details.title}
                </div>
                <div class='description'>
                    {details.overview}
                </div>
                <div class='description'>
                    Release Date:
                </div>
                <div class='decscription_primary'>
                    {details.release_date}
                </div>
                <div class='description'>
                    Release Date:
                </div>
                <div class='decscription_primary'>
                    {`${details.runtime} min`}
                </div>
                <div class='description'>
                    Genres:
                </div>
                <div class='decscription_primary'>
                    {details.genres.map((element, index) => (details.genres.length - 1 === index) ? `${element.name} ` : `${element.name}, `)}
                </div>
            </div>
        </div>
    </>);
}

export { Details };