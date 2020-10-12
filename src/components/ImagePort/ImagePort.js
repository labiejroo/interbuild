//react
import React from "react";
import PropTypes from "prop-types";

//components
import HOC from "../../components/HOCImagePort/HOCImagePort";

class ImagePort extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.isScalable ? (
          // <HOC props={
          <div className="website__portfolio__imgSection__beforeAfterImgs__compareImages">
            <img
              src={this.props.src}
              width={this.props.width}
              height={this.props.height}
            />
          </div>
        ) : (
          //  } />
          <img
            src={this.props.src}
            width={this.props.width}
            height={this.props.height}
          />
        )}
      </>
    );
  }
}

ImagePort.defaultProps = {
  width: "100%",
  height: "100%",
  isScalable: false
};

export default ImagePort;
// ((props.isScalable === true)
//   ? ImagePort
//   : ImagePort);

// const ImagePort = (props) => (

//     <img
//         src={props.src}
//         width = {props.width}
//         height = {props.height}
//     />
// );

// ImagePort.defaultProps = {
//   width: '100%',
//   height: '100%',
//   isScalable : false
// };

// export default HOC(ImagePort);
// // ((props.isScalable === true)
// //   ? ImagePort
// //   : ImagePort);
