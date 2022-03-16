
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import './navbar.css';
export const Navbar = (props) => {

  return (
    <>
      <header id="header" height="80px">
        <Link to="/movies">
        <Logo height="40px" width="40px" />
        </Link>
        {props.isInsideProfile ? (
          (props.isAuthorized &&
          <Link id="link" to="/login" onClick={()=>{
            localStorage.setItem('authorized','false');
        }}>
            <h2 id="navbutton">Log out</h2>
          </Link>)
        ) :
          (
            <Link id="link" to="/login">
            <h2 id="navbutton">Profile</h2>
            </Link>
          )
        }
      </header>
    </>
  );
}