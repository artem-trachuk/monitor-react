import React from "react";
import PropTypes from "prop-types";
import { Flag, Grid, Header, Icon, Image } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import AboutUsProfile from "../organisms/AboutUsProfile";

const AboutUsTemplate = props => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="twelve wide centered column">
            <Header as={"h1"} textAlign={"center"}>
              <FormattedMessage id="about_us.title" />
            </Header>
            <FormattedMessage id="about_us.description" />
          </div>
        </div>
      </div>
      <Grid divided>
        <Grid.Row>
          <Grid.Column>
            <Header as={"h3"} textAlign={"center"}>
              <FormattedMessage id="about_us.team" />
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={4}>
            <AboutUsProfile
              imageSrc={
                "https://instagram.fiev15-1.fna.fbcdn.net/vp/dd9779b63516ee8b592d577130aeedaf/5CFE67AA/t51.2885-15/e35/s320x320/12142209_1918743445016611_999285338_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net"
              }
              position={"Developer"}
              name={"Artem Trachuk"}
              linkedin={"https://www.linkedin.com/in/artem-trachuk/"}
              telegram={"https://t.me/artem_trachuk"}
              flag={"ua"}
              location={"Odessa, Ukraine"}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <AboutUsProfile
              imageSrc={
                "https://instagram.fiev15-1.fna.fbcdn.net/vp/ae1fface2753302001d27f276748c28f/5CDE193E/t51.2885-15/sh0.08/e35/s640x640/36753575_466378133826623_7677412311144857600_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net"
              }
              position={"Translator"}
              name={"Михаил Пожарников"}
              linkedin={""}
              telegram={""}
              flag={"ee"}
              location={"Narva, Estonia"}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <AboutUsProfile
              imageSrc={
                "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
              position={"Tester"}
              name={"Максим Саенко"}
              flag={"ua"}
              location={"Odessa, Ukraine"}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

AboutUsTemplate.propTypes = {};

export default AboutUsTemplate;
