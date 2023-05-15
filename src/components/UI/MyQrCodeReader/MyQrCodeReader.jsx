import React from "react";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import classes from "./MyQrCodeReader.module.css";

function MyQrCodeReader() {
  const onNewScanResult = (decodedText) => {
    window.location.replace(decodedText);
  };

  return (
    <div className={classes.app}>
      <Html5QrcodePlugin
        fps={10}
        qrbox={242}
        verbose={false}
        disableFlip
        qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  );
}

export default MyQrCodeReader;
