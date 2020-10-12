//components
import React from "react";

//external
import SmoothScroll from "../../SmoothScroll/SmoothScroll";

const DecorationArrow = (props) => (
  <>
    <br></br>
    <img
      className="website__decorationAnimation"
      src={props.src}
      width={props.width}
      height={props.height}
      onClick={() => SmoothScroll.handleScrollEvent(props.point)}
    />
    <br></br>
  </>
);

export default DecorationArrow;
