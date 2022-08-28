import { useDispatch } from 'react-redux';
import { createUser, resetUser, UserKey } from '../../redux/states/user';
import { useNavigate} from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, Roles } from '../../model';
import { useEffect } from 'react';
import { clearLocalStorage } from '../../utilities';
import { getMor } from '../../services/auth.service';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});
  },[]);
  const login = async () => {
    try {
      const result = await getMor();
      dispatch(createUser({...result, rol: Roles.ADMIN}));
      navigate(`/${PublicRoutes.LOGIN}`, {replace: true});
    } catch (error) {}
  };
  return (
    <div>
      <h2>
        <button onClick={login}>Login</button>
      </h2>
    </div>
  )
}
export default Login
