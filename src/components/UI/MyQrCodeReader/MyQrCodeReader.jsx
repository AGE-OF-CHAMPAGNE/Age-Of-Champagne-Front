import React from "react";
import PropTypes from "prop-types";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import classes from "./MyQrCodeReader.module.css";

function MyQrCodeReader({ onNewScanResult }) {
  return (
    <div className={classes.app}>
      <Html5QrcodePlugin
        fps={1}
        qrbox={242}
        verbose={false}
        disableFlip
        qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  );
}

MyQrCodeReader.defaultProps = {
  onNewScanResult: (decodedText) => window.location.replace(decodedText),
};

MyQrCodeReader.propTypes = {
  onNewScanResult: PropTypes.func,
};

export default MyQrCodeReader;
