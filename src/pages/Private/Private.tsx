import { lazy } from 'react';
import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../model"
import { RoutersWitchNotFound } from "../../utilities";

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));

function Private() {
  return (
    <RoutersWitchNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutersWitchNotFound>
  )
}
export default Private