import Button from '@mui/material/Button';
import { useAuth } from '../hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return <Button onClick={logout}>Выход</Button>;
};

export default LogoutButton;