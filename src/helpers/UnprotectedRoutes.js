import React from "react";
import AboutUs from "../pages/AboutUs";
import {Route} from "react-router-dom";
import Guest from "../pages/Guest";

const UnprotectedRoutes = () => {
  return (
    <>
      <Route exact path={"/"} component={Guest} />
      <Route path={"/r/about_us"} component={AboutUs} />
    </>
  );
};

export default UnprotectedRoutes;
