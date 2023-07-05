import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { logOutOperation } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Welcome, {user.name}</p>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOutOperation())}
        endIcon={<LogoutOutlinedIcon fontSize="small" />}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
