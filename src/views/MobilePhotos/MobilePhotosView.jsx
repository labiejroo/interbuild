//react
import React from "react";

//component
import ImagePort from "../../components/ImagePort/ImagePort";

//resources
import img1 from "../../Photos/Best/1.jpg";
import img2 from "../../Photos/Best/2.jpg";
import img3 from "../../Photos/Best/3.jpg";
import img4 from "../../Photos/Best/4.jpg";
import img5 from "../../Photos/Best/5.jpg";
import img6 from "../../Photos/Best/6.jpg";
import img7 from "../../Photos/Best/7.jpg";
import img8 from "../../Photos/Best/8.jpg";
import img9 from "../../Photos/Best/9.jpg";

class MobilePhotosView extends React.Component {
  state = {
    isScrollUp: true
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState((prevState) => ({
          isScrollUp: !prevState.isScrollUp
        })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(props) {
    let noBullets = {
      listStyleType: "none"
    };

    return (
      <>
        <div
          className="MOBILE__website__seeMore2"
          onClick={this.props.stateChange}
        >
          Powrot
        </div>

        <br></br>
        <br></br>

        <div className="MOBILE__website__photosSection">
          <ImagePort isScalable={true} src={img1} width="350" height="370" />
          <ImagePort isScalable={true} src={img2} width="350" height="370" />
          <ImagePort isScalable={true} src={img3} width="350" height="370" />
          <ImagePort isScalable={true} src={img4} width="350" height="370" />
          <ImagePort isScalable={true} src={img5} width="350" height="370" />
          <ImagePort isScalable={true} src={img6} width="350" height="370" />
          <ImagePort isScalable={true} src={img7} width="350" height="370" />
          <ImagePort isScalable={true} src={img8} width="350" height="370" />
          <ImagePort isScalable={true} src={img9} width="350" height="370" />
        </div>
      </>
    );
  }
}

export default MobilePhotosView;
