import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// @@TODO: Need to be more secure
const PrivateRoutes = ({ component: Component, ...rest }) => {
  let authorised = false; // User authorised to access this route or not
  let redirectTo;

  const cookie = document.cookie
    .split(";")
    .reduce((res, c) => {
      const [key, val] = c.trim().split("=").map(decodeURIComponent);
      const allNumbers = str => /^\d+$/.test(str);
      try {
        return Object.assign(res, { [key]: allNumbers(val) ? val : JSON.parse(val) });
      } catch (e) {
        return Object.assign(res, { [key]: val });
      }
    }, {});

  // Check if user is logged in or not
  if ("UAT" in cookie) {
    authorised = true;
  } else {
    console.log("not authorised");
    redirectTo = "/login";
  }

  // if (!rest.path.includes(cookie.defaultPage)) {
  //   authorised = false;
  //   redirectTo = cookie.defaultPage;
  // }

  // if (rest.path === "/man" || redirectTo === "/man") {
  //   if (!cookie.stageTypeId) {
  //     console.log("invalid state: no stageTypeId for shopfloor account");
  //   }
  // }

  // if (rest.path === "/des" || redirectTo === "/des") {
  //   if (!cookie.workerId) {
  //     console.log("invalid state: no stageTypeId for shopfloor account");
  //   }
  // }

  console.log("PRIVROUTE:auth", authorised);
  return (
    <Route
      {...rest}
      render={props => (
        authorised
          ? <Component {...props} />
          : <Redirect
            to={{
              // pathname: "/account",
              pathname: redirectTo,
              state: { from: props.location }
            }}
          />
      )}
    />
  );
};

PrivateRoutes.propTypes = {
  component: PropTypes.elementType,
  path: PropTypes.string,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.object,
    }),
  }),
};

export default PrivateRoutes;
