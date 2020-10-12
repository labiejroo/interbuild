import React from "react";

const Logo = function () {
  function gohome() {
    window.location = "../";
  }

  return (
    <div onClick={gohome}>
      <b>interBuild.&nbsp;</b>
    </div>
  );
};

export default Logo;
