import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Networks from "./Networks";
import Contacts from "./Contacts";
import CompanyAdder from "./CompanyAdder";
import CompanyEditor from "./CompanyEditor";
import CompanyViewer from "./CompanyViewer";
import HubAdder from "./HubAdder";
import HubEditor from "./HubEditor";
import HubViewer from "./HubViewer";
import DeviceAdder from "./DeviceAdder";
import DeviceEditor from "./DeviceEditor";
import DeviceViewer from "./DeviceViewer";
import Permissions from "./Permissions";
import User from "./User";
import AboutUs from "./AboutUs";

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/r/home" component={Home} />
        <Route path="/r/networks" component={Networks} />
        <Route path="/r/contacts" component={Contacts} />
        <Route exact path="/r/companies/add" component={CompanyAdder} />
        <Route exact path="/r/companies/edit/:id" component={CompanyEditor} />
        <Route exact path="/r/companies/view/:id" component={CompanyViewer} />
        <Route
          exact
          path="/r/hubs/add/:companyId/:companyName"
          component={HubAdder}
        />
        <Route exact path="/r/hubs/edit/:id" component={HubEditor} />
        <Route exact path="/r/hubs/view/:id" component={HubViewer} />
        <Route
          exact
          path="/r/devices/add/:deviceType/:hubId/:hubName"
          component={DeviceAdder}
        />
        <Route exact path="/r/devices/edit/:id" component={DeviceEditor} />
        <Route exact path="/r/devices/view/:id" component={DeviceViewer} />
        <Route path="/r/permissions/:companyId" component={Permissions} />
        <Route exact path="/r/user" component={User} />
        <Route path={"/r/about_us"} component={AboutUs} />
      </>
    );
  }
}

export default Routes;
