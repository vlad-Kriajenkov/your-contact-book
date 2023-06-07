import { PrivateRoute, PublickRoute } from 'hook/Route';
import { AuthNavigation } from 'page/AuthNavigation/AuthNavigation';
import { Authorization } from 'page/AuthNavigation/Authorization/Authorization';
import { Registration } from 'page/AuthNavigation/Registration/Registration';
import Home from 'page/Home/Home';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthNavigation />}>
          <Route
            path="authorization"
            element={
              <PublickRoute redirectTo="/home" component={<Authorization />} />
            }
          />
          <Route
            path="registration"
            element={
              <PublickRoute redirectTo="/home" component={<Registration />} />
            }
          />
        </Route>

        <Route
          path="/home"
          element={<PrivateRoute redirectTo="/" component={<Home />} />}
        >
          <Route
            path="userInfo"
            element={
              <PrivateRoute redirectTo="/" component={<div>userInfo</div>} />
            }
          />
          <Route
            path="phonebook"
            element={
              <PrivateRoute redirectTo="/" component={<div>phonebook</div>} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
