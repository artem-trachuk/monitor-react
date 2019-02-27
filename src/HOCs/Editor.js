import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, Icon } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { Field, reduxForm, change } from "redux-form";
import MapWrapper from "../organisms/MapWrapper";
import { patchDataByAPI, postDataByAPI } from "../actions/dataActions";
import { connect } from "react-redux";
import { EditorReduxFormName } from "../helpers/editorReduxFormName";
import { Redirect } from "react-router-dom";
import { setNavigatedLink } from "../actions/navigationActions";
import PhotoEditorOrganism from "../organisms/PhotoEditorOrganism";
import DocEditorOrganism from "../organisms/DocEditorOrganism";

class Editor extends Component {
  componentWillUnmount() {
    // remove page name to remove highlight in the navigation bar
    this.props.setNavigatedLink("");
  }
  render() {
    const submitForm = values => {
      if (values._id) {
        return this.props.patchData(this.props.resource, values);
      } else {
        return this.props.postData(this.props.resource, values);
      }
    };
    const { pristine, submitting, handleSubmit } = this.props;
    if (
      this.props.currentLink !== undefined &&
      this.props.currentLink.resource !== undefined
    ) {
      return (
        <Redirect
          to={
            "/r/" +
            this.props.currentLink.resource +
            "/view/" +
            this.props.currentLink._id
          }
        />
      );
    }
    // this.props.addMarker(this.props.initialValues.LatLng);
    return (
      <Form onSubmit={handleSubmit(submitForm)}>
        <div className="ui container">
          <div className="ui grid">
            {this.props.header}
            <div className="row stackable">
              {this.props.photos &&
                this.props.photos.length > 0 &&
                this.props.photos.map(photo => (
                  <div
                    key={photo._id}
                    className="three wide column middle aligned"
                  >
                    <PhotoEditorOrganism
                      src={photo.path}
                      resource={this.props.resource}
                      id={this.props.initialValues._id}
                      queryId={photo._id}
                    />
                  </div>
                ))}
            </div>
            <div className="row stackable">
              {this.props.documents &&
                this.props.documents.length > 0 &&
                this.props.documents.map(doc => (
                  <div
                    key={doc._id}
                    className="sixteen wide column"
                  >
                    <DocEditorOrganism
                      resource={this.props.resource}
                      id={this.props.initialValues._id}
                      originalname={doc.originalname}
                      queryId={doc._id}
                    />
                  </div>
                ))}
            </div>
            <div className="row stackable">
              {this.props.children}
              <div className="eight wide column">
                {/*Map Wrapper*/}
                <Field
                  name="LatLng"
                  component={MapWrapper}
                  defaultCenter={
                    this.props.initialValues.LatLng
                      ? this.props.initialValues.LatLng
                      : this.props.defaultCenter
                  }
                />
              </div>
            </div>
            <div className="sixteen wide column right aligned">
              <Button
                type="submit"
                icon
                labelPosition="right"
                positive
                disabled={pristine || submitting}
              >
                <FormattedMessage id="interface.save" /> <Icon name="save" />
              </Button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    defaultCenter: state.userReducer.defaultCenter,
    currentLink: state.navigationReducer.currentLink
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postData: (data, resource) => {
      dispatch(postDataByAPI(data, resource));
    },
    patchData: (data, resourceName) => {
      dispatch(patchDataByAPI(data, resourceName));
    },
    setNavigatedLink: link => {
      dispatch(setNavigatedLink(link));
    },
    addMarker: value => {
      dispatch(change(EditorReduxFormName, "LatLng", value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: EditorReduxFormName })(Editor));

Editor.propTypes = {
  children: PropTypes.node.isRequired,
  initialValues: PropTypes.object.isRequired,
  header: PropTypes.node,
  resource: PropTypes.string.isRequired
};
