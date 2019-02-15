import React from "react";
import { Header, Image, Modal } from "semantic-ui-react";
import { serverURL } from "../helpers/serverURL";

const Photos = props => {
  if (props.photos) {
    return props.photos.map(photo => (
      <div key={photo.path} className="three wide column middle aligned">
        <Modal
          trigger={<Image fluid src={serverURL + photo.path} />}
          basic
          size="small"
          closeIcon
        >
          <Header icon="file image" content={photo.originalname} />
          <Modal.Content>
            <Image fluid src={serverURL + photo.path} />
          </Modal.Content>
        </Modal>
      </div>
    ));
  } else {
    return null;
  }
};

Photos.propTypes = {};

export default Photos;
