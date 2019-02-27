import React, { Component } from "react";
import { Icon, Table } from "semantic-ui-react";
import _ from "lodash";
import { FormattedMessage } from "react-intl";
import getDeviceIcon from "../helpers/getDeviceIcon";
import { Link } from "react-router-dom";

class IpTableTemplate extends Component {
  state = {
    column: null,
    data: this.props.ip,
    direction: null
  };
  static getDerivedStateFromProps(props, state) {
    if (props.ip !== state.data) {
      return { data: props.ip };
    }
    return null;
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  render() {
    const { column, data, direction } = this.state;
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="row">
            <Table sortable celled fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    sorted={column === "ip" ? direction : null}
                    onClick={this.handleSort("ip")}
                  >
                    <FormattedMessage id={"interface.ip"} />
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === "device" ? direction : null}
                    onClick={this.handleSort("device")}
                  >
                    <FormattedMessage id={"interface.device"} />
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === "hub" ? direction : null}
                    onClick={this.handleSort("hub")}
                  >
                    <FormattedMessage id={"interface.hub"} />
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === "company" ? direction : null}
                    onClick={this.handleSort("company")}
                  >
                    <FormattedMessage id={"interface.company"} />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {_.map(this.props.ip, ({ ip, hub, name, deviceType, _id }) => (
                  <Table.Row key={name}>
                    <Table.Cell>{ip}</Table.Cell>
                    <Table.Cell>
                      <Icon name={getDeviceIcon(deviceType)} />{" "}
                      <Link to={"/r/devices/view/" + _id}>{name}</Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link to={"/r/hubs/view/" + hub._id}>{hub.name}</Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link to={"/r/companies/view/" + hub.company._id}>
                        {hub.company.name}
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default IpTableTemplate;
