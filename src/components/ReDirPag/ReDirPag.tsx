import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../model";
import { resetUser, UserKey } from "../../redux/states/user"
import { clearLocalStorage } from "../../utilities"
function ReDirPag() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reDir = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});
  }
  return (
    <div>
      <button onClick={reDir}>Home</button>
    </div>
  )
}
export default ReDirPag