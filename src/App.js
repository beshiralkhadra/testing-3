import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from "./components/landingPage/Landingpage";
import Footer from "./components/footer/Footer";
import Choosing from "./components/Choosing/Choosing";
import Header from "./components/header/Header";
import Registration from "./components/registration/Registration";
import Driverprofile from "./components/driverprofile/Driverprofile";

function App() {
  const [userSignupInformation, setUserSignupInformation] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  return (
    <Router>
      <Switch>
        <Route path="/registration">
          <Registration
            userSignupInformation={userSignupInformation}
            setUserSignupInformation={setUserSignupInformation}
          />
        </Route>
        <Route exact path="/">
          <Landingpage />
        </Route>
        <Route path="/driverprofile">
          <Header />
          <Driverprofile />
        </Route>
        <Route path="/choosing">
          <Header />
          <Choosing />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
