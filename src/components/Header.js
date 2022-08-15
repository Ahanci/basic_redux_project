// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import classes from './Header.module.css';
import { authActions } from '../store/index';

const Header = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    console.log(isAuth)
    dispatch(authActions.logout());
    console.log(isAuth)
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
     {!isAuth &&  <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
          <button onClick={logoutHandler} >Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
