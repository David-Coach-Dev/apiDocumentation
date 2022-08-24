import { useDispatch } from 'react-redux';
import { createUser, resetUser, UserKey } from '../../redux/states/user';
import { useNavigate} from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, Roles } from '../../model';
import { getMorty } from '../../services';
import { useEffect } from 'react';
import { clearLocalStorage } from '../../utilities';
import rol from '../../../.history/src/guards/rol.gruard_20220824014428';
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
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: Roles.ADMIN }));
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
