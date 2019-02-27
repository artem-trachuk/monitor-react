import React from 'react';
import PropTypes from 'prop-types';
import QRCode from "qrcode.react";

const QrOrganism = props => {
  const contact = props.contact;
  const contactNote = contact.note ? "NOTE:" + contact.note + "\n" : "";
  const QRCodeValue =
      "BEGIN:VCARD\n" +
      "VERSION:3.0\n" +
      "ORG:" +
      contact.company.name +
      "\n" +
      "FN:" +
      contact.name +
      "\n" +
      "TEL;TYPE=WORK,VOICE:" +
      contact.phone +
      "\n" +
      contactNote +
      "END:VCARD";
  return (
      <div className="eight wide column center aligned">
        <QRCode value={QRCodeValue} size={256} />
      </div>
  );
};

QrOrganism.propTypes = {
  contact: PropTypes.object.isRequired
};

export default QrOrganism;