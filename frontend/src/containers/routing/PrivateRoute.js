import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import {selectIsAuthenticated} from "../../modules/user";

class PrivateRouteContainer extends Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props;

    return (
      <Route
        {...props}
        render={(props) =>
          isAuthenticated
            ? <Component {...props} />
            :
            <Redirect to={{
              pathname: "/account",
              state   : { from: props.location }
            }} />

        }
      />
    )
  }
}

export const PrivateRoute = connect(
  (state) => ({
    isAuthenticated: selectIsAuthenticated(state)
  })
)(PrivateRouteContainer);
