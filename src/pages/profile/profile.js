import { Navbar } from '../components/navbar/navbar';
import './profile.css';
import logo from '../../images/login_logo.png'
import { useState } from 'react';

const Profile = () => {
    const [authorized, setAuthorized] = useState(localStorage.getItem('authorized') === 'true');
    const [loginText, setLoginText] = useState("");
    const [passText, setPassText] = useState("");

    return (
        <>
            <Navbar isInsideProfile={true} isAuthorized={authorized} />
            <div id='wrapper'>
                <div id='logo'>
                    <img src={logo}></img>
                </div>
                <div id='box2'>
                    {authorized == true ? (<><div id='profile_title'>
                        Welcome, Admin!
                    </div>
                    </>):(<><div id='profile_title'>
                        Login
                    </div>
                    <input type="text" placeholder='Login' value={loginText} onChange={(event)=>{setLoginText(event.target.value)}} ></input>
                    <input type="password" placeholder='Password' value={passText} onChange={(event)=>{setPassText(event.target.value)}} ></input>
                    <button id="submit_button" type='button' onClick={()=>{
                        if (loginText=="Admin" && passText=="12345"){
                            localStorage.setItem('authorized','true');
                            setAuthorized(true);
                        }
                    }} disabled={false}>
                        Login
                    </button></>)}
                    
                </div>
            </div>
        </>
    );
}

export { Profile };