import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import styles from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
