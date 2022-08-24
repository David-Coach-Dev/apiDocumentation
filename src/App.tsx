import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route} from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, Roles } from './model';
import { AuthGuard, RolGuard } from './guards';
import { RoutersWitchNotFound } from './utilities';
import store from './redux/store';
import './App.css'
import Logout from '../.history/src/components/Logout/Logout_20220824010639';
import { Dashboard } from './pages/Private';
const Login = lazy(()=> import('./pages/Login/Login'))
const Private = lazy(()=> import('./pages/Private/Private'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Charging...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutersWitchNotFound>
              <Route path="/" element={<Navigate to ={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RolGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RoutersWitchNotFound>
          </BrowserRouter>
          <Logout />
        </Provider>
      </Suspense>
    </div>
  )
}
export default App