import React, { useEffect } from "react";
import PropTypes from "prop-types";
import DukContext from ".";
import { showDuk, dontShowDuk } from "../../services/api/didyouknows";

function DukProvider({ value, children }) {
  useEffect(() => {
    if (value.duk) {
      showDuk();
    } else {
      dontShowDuk();
    }
  }, [value]);

  return <DukContext.Provider value={value}>{children}</DukContext.Provider>;
}

DukProvider.propTypes = {
  value: PropTypes.shape({ duk: PropTypes.bool, setDuk: PropTypes.func })
    .isRequired,
  children: PropTypes.node,
};

DukProvider.defaultProps = {
  children: null,
};

export default DukProvider;
