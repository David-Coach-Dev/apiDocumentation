import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../model";
import { Pag404 } from "../pages/Pag404";



interface Props {
    children: JSX.Element[] | JSX.Element;
}
function RoutersWitchNotFound({children}: Props) {
    return (
        <Routes>
            {children}
            <Route path="*" element={ <Pag404/>} />
        </Routes>
    );
}
export default RoutersWitchNotFound