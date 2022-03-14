
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import './navbar.css';
export const Navbar = (props) => {

  return (
    <>
      <header className="header" height="80px">
        <Link to="/movies">
        <Logo height="40px" width="40px" />
        </Link>
        {props.isInsideProfile ? (
          (props.isAuthorized &&
          <Link className="link" to="/movies" onClick={()=>{
            localStorage.setItem('authorized','false');
        }}>
            <h2 className="navbutton">Log out</h2>
          </Link>)
        ) :
          (
            <Link className="link" to="/profile">
            <h2 className="navbutton">Profile</h2>
            </Link>
          )
        }
      </header>
    </>
  );
}