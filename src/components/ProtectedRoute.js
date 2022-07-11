import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../authentication/firebase';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  if (!user) {
    navigate("/login");
    return;
  }
  return children;
};

export default ProtectedRoute;
