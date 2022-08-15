import classes from './Auth.module.css';
import { useDispatch,useSelector } from 'react-redux/es/exports';
// import {useDispatch, useSelector} from 'react-redux'
import {authActions} from '../store/index';

const Auth = () => {
  const dispatch=useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler= (event)=>{
    console.log(isAuth);
    event.preventDefault();

    dispatch(authActions.login);
    console.log(isAuth);   
   
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler} >
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit' >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
