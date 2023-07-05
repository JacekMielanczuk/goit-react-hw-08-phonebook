import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
