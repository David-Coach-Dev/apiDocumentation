import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../model";
import { resetUser, UserKey } from "../../redux/states/user"
import { clearLocalStorage } from "../../utilities"

function Pag404() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reDir= () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});
  }
  return (
    <div>
      <h2>Pag Not Found Error 404.</h2>
      <button onClick={reDir}>Regresar</button>
    </div>

  )
}
export default Pag404
