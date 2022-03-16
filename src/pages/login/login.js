import { Navbar } from '../components/navbar/navbar';
import './login.css';
import logo from '../../images/login_logo.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    const [authorized, setAuthorized] = useState(localStorage.getItem('authorized') === 'true');
    const [loginText, setLoginText] = useState("");
    const [passText, setPassText] = useState("");
    const [failureAuto, setFailureAuto] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (authorized) {
            navigate('/profile');
        }
    }, [
        authorized
    ]);

    return (
        <>
            <Navbar isInsideProfile={true} isAuthorized={false} />
            <div id='wrapper'>
                <div id='logo'>
                    <img src={logo}></img>
                </div>
                <div id='box2'>
                    <><div id='profile_title'>
                        Login
                    </div>
                        <input type="text" placeholder='Login' value={loginText} onChange={(event) => { setLoginText(event.target.value) }} ></input>
                        <input type="password" placeholder='Password' value={passText} onChange={(event) => { setPassText(event.target.value) }} ></input>

                        {failureAuto && <div id='error_text'>
                            Login or password was entered incorrectly!
                        </div>}
                        <button id="submit_button" type='button' onClick={() => {
                            if (loginText == "Admin" && passText == "12345") {
                                localStorage.setItem('authorized', 'true');
                                setAuthorized(true);
                                setFailureAuto(false);
                            } else {
                                setFailureAuto(true);
                            }
                        }} disabled={false}>
                            Login
                        </button></>

                </div>
            </div>
        </>
    );
}

export { Login };