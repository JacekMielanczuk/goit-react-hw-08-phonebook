import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import clsx from 'clsx';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            clsx(styles.link, isActive && styles.active)
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
