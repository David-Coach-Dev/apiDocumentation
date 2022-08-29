import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../model";



interface Props {
    children: JSX.Element[] | JSX.Element;
}
function RoutersWitchNotFound({children}: Props) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<Navigate to = {PublicRoutes.LOGIN}/>} />
        </Routes>
    );
}
export default RoutersWitchNotFound