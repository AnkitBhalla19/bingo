import React, { useState, useEffect } from "react";
import {
  withRouter,
  Switch,
  Link,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";

import Auth from "./pages/Auth/auth.js";
import Home from "./pages/Home/home.js";
import Room from "./pages/BingoGame/room.js";
import LeaderBoard from "./pages/LeaderBoard/leaderBoard.js";
import Profile from "./pages/Profile/Profile.js";
import Navbar from "./components/Navbar/navbar.jsx";
import AppStyles from "./App.module.css";
import { getToken } from "./utils/commonData/common.js";
import FooterPage from "./components/Footer/footer.jsx";
import Error404 from "./pages/Error404/error404.js";
import AboutUs from './pages/AboutUs/aboutUs.js';
import Privacy from './pages/PrivacyPolicy/privacyPolicy.js';

const App = () => {
  const history = useHistory();
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("tok")));
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      if (getToken() === null) {
        location.pathname.replace("/SignIn");
        history.push("/SignIn");
      } else {
        location.pathname.replace("/home");
        history.push("/home");
      }
    }
  }, []);

  return (
    <>
      {getToken() !== null &&
      history.location.pathname !== "/SignIn" &&
      history.location.pathname !== "/SignUp" ? (
        <div className={AppStyles.navbar}>
          <Navbar />
        </div>
      ) : null}

      <Switch>
        <Route path="/SignIn">
          <Auth type={"SignIn"} setToken={setToken} />
        </Route>
        <Route path="/SignUp">
          <Auth type={"SignUp"} setToken={setToken} />
        </Route>
        <Route path="/Home">
          <Home token={token} />
        </Route>
        <Route path="/Room">
          <>
            <Room />
          </>
        </Route>
        <Route path="/leaderBoard">
          <LeaderBoard />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/error">
          <Error404 />
        </Route>
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/privacyPolicy" component={Privacy} />
        <Route>
          <Home token={token} />
        </Route>
      </Switch>
      {getToken() !== null &&
      history.location.pathname !== "/SignIn" &&
      history.location.pathname !== "/SignUp" ? (
        <div className={AppStyles.footer}>
          <FooterPage />
        </div>
      ) : null}
    </>
  );
};

export default withRouter(App);
