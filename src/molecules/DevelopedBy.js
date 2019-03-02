import React from 'react';
import {Grid} from "semantic-ui-react";

const DevelopedBy = () => {
  return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column textAlign="right">
            <span className={"developed-by"}>
              Developed by private entrepreneur{" "}
              <a rel="noopener noreferrer"
                 href="https://www.linkedin.com/in/artem-trachuk/"
                 target="_blank"
              >
                Artem Trachuk
              </a>{" "}
              in Ukraine
            </span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  );
};

export default DevelopedBy;