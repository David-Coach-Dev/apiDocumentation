import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../model";



interface Props {
    children: JSX.Element[] | JSX.Element;
}
function RoutersWitchNotFound({children}: Props) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<Navigate to = {PublicRoutes.PAG404}/>} />
        </Routes>
    );
}
export default RoutersWitchNotFound