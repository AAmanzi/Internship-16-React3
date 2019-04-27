import React, { Component } from "react";

const withLoader = loadingProp => WrappedComponent => {
  const isEmpty = prop => prop === null;

  return class LoadIndicator extends Component {
    render() {
      if (isEmpty(this.props[loadingProp])) {
        return <div>...</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLoader;
