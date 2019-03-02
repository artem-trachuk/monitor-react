import React, { Component } from "react";
import {Divider, Header, Icon, Image} from "semantic-ui-react";
import GuestPhotos from "../organisms/GuestPhotos";
import GuestTemplate from "../templates/GuestTemplate";
import {Logo} from "../images/MonitorPSlogoSolid.png";

class Guest extends Component {
  render() {
    return <GuestTemplate/>
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="sixteen wide column center aligned">
            <Image src={Logo} />
            <Header as="h1">
              <Icon name="record" className="green" /> Monitor PS
            </Header>
            <Header as="h4">
              Tool for installed surveillance devices monitoring. We will help
              you to keep the networks be structured and categorized.
            </Header>
          </div>
          <div className="sixteen wide column">{this.props.auth}</div>
        </div>
        <div className="sixteen wide column">
          <span>share access with co-workers</span>
          <span>
            don't rely on multiple text documents, chat history or even your
            memory
          </span>
          <span>track issues</span>
          <span>all your networks in one place</span>
          <span>save locations, photos, documents</span>
        </div>
        <GuestPhotos />
      </div>
    );
  }
}

export default Guest;
