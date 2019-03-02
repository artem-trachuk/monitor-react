import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from "react-intl";
import GuestPhotos from "../organisms/GuestPhotos";
import {Header, Icon, Image} from "semantic-ui-react";
import Logo from "../images/logo-final.png";

const GuestTemplate = props => {
  return (
      <div className="ui container">
        <div className="ui grid">
          <div className="sixteen wide column center aligned">
            <Image className={"guest-logo"} centered src={Logo} />
            <Header as="h3">
              <FormattedMessage id={"string.guestMessage"}/>
            </Header>
          </div>
        </div>
        <GuestPhotos />
      </div>
  );
};

GuestTemplate.propTypes = {

};

export default GuestTemplate;