import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../model";
import { AppStore } from '../redux/store';
interface Props {
    privateValidation: boolean;
}
export const AuthGuard = ({privateValidation}: Props)=>{
    const userState = useSelector((store: AppStore) => store.user);
    return userState.id ? (privateValidation ?(<Outlet />):(<Navigate replace to={PrivateRoutes.PRIVATE} />)):(<Navigate replace to={PublicRoutes.LOGIN} />
    );
};
export default AuthGuard;