import React from "react";
import AboutUs from "../pages/AboutUs";
import {Route, Switch} from "react-router-dom";
import Guest from "../pages/Guest";

const UnprotectedRoutes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Guest} />
      <Route path={"/r/about_us"} component={AboutUs} />
      <Route component={Guest} />
    </Switch>
  );
};

export default UnprotectedRoutes;
