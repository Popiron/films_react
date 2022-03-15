import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { MoviesApi } from '../../asyncActions/movies';
import { Navbar } from '../components/navbar/navbar';
import {ReactComponent as Star} from  '../../images/star.svg';

import './details.css';

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        MoviesApi.fetchMovieDetails(dispatch, id);
    }, []);

    const details = useSelector(state => state.details);

    return (<>
        <Navbar isInsideProfile={false} />
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
                    {details.genres.map((element,index) => (details.genres.length-1===index) ? `${element.name} `: `${element.name}, `)}
                </div>
            </div>
        </div>

        {/* <div id='logo'>
                <img src={logo}></img>
            </div>
            <div id='box2'>
                {authorized == true ? (<><div id='main_title'>
                    Welcome, Admin!
                </div>
                </>):(<><div id='main_title'>
                    Login
                </div>
                <input type="text" placeholder='Login' value={loginText} onChange={(event)=>{setLoginText(event.target.value)}} ></input>
                <input type="password" placeholder='Password' value={passText} onChange={(event)=>{setPassText(event.target.value)}} ></input>
                <button type='button' onClick={()=>{
                    if (loginText=="Admin" && passText=="12345"){
                        localStorage.setItem('authorized','true');
                        setAuthorized(true);
                    }
                }} disabled={false}>
                    Login
                </button></>)}
                
            </div> */}
    </>);
}

export { Details };