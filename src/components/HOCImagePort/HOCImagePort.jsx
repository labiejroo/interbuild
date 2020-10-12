//react
import React from "react";

export default (Component) => {
  return (props) => (
    <div className="compareImages">
      <Component {...props} />
    </div>
  );
};
