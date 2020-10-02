import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
