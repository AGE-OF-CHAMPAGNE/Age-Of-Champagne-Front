import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserContext from ".";
import { getMe } from "../../services/api/user";

function UserProvider({ children }) {
  const [userData, setUserData] = useState(undefined);
  const [value, setValue] = useState(userData);

  useEffect(() => {
    getMe().then((response) => {
      setUserData(response);
    });
  }, []);

  useEffect(() => {
    setValue(userData);
  }, [userData]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

UserProvider.defaultProps = {
  children: null,
};

export default UserProvider;
