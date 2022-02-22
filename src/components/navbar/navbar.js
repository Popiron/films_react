
import {ReactComponent as Logo} from  '../../images/logo.svg';
import './navbar.css';
export const Navbar = () => {

    return (
      <>
        <header class="header" height="80px">
          <Logo height="40px" width="40px"/>
          <a href='https://yandex.ru/'>
          <h3 class="button">Log in</h3>
          </a>
        </header>
      </>
    );
  }