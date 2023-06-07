import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorToken } from 'redux/auth/auth-selector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectorToken);
  const shouldRedirect = !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export const PublickRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectorToken);

  return token ? <Navigate to={redirectTo} /> : Component;
};
