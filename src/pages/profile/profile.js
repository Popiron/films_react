import { Navbar } from '../components/navbar/navbar';
import './profile.css';
import logo from '../../images/login_logo.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Profile = () => {
    const [authorized, setAuthorized] = useState(localStorage.getItem('authorized') === 'true');

    const navigate = useNavigate();

    useEffect(()=>{
        if (!authorized) {
            navigate('/login');
        }
    },[
        authorized
    ]);
        return (
            <>
                <Navbar isInsideProfile={true} isAuthorized={true} />
                <div id='wrapper'>
                    <div id='logo'>
                        <img src={logo}></img>
                    </div>
                    <div id='box2'>
                        <><div id='profile_title'>
                            Welcome, Admin!
                        </div>
                        </>
                    </div>
                </div>
            </>
        );

    
}

export { Profile };