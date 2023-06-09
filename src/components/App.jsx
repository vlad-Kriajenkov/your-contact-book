import { PrivateRoute, PublickRoute } from 'hook/Route';
import { AuthNavigation } from 'page/AuthNavigation/AuthNavigation';
import { Authorization } from 'page/AuthNavigation/Authorization/Authorization';
import { Registration } from 'page/AuthNavigation/Registration/Registration';
import Home from 'page/Home/Home';
import PhoneBook from 'page/Phonebook/Phonebook';
import UserInfo from 'page/UserInfo/UserInfo';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operation';

export const App = () => {
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchCurrentUser())
},[dispatch])

  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthNavigation />}>
          <Route
            path="authorization"
            element={
              <PublickRoute
                redirectTo="/home/userInfo"
                component={<Authorization />}
              />
            }
          />
          <Route
            path="registration"
            element={
              <PublickRoute
                redirectTo="/home/userInfo"
                component={<Registration />}
              />
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
              <PrivateRoute redirectTo="/" component={<UserInfo/>} />
            }
          />
          <Route
            path="phonebook"
            element={
              <PrivateRoute redirectTo="/" component={<PhoneBook/>} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
