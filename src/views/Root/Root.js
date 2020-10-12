//react
import React, { useEffect } from "react";

//css
import "./index.scss";

//components
import HomeView from "../Home/HomeView";
import PhotosView from "../Photos/PhotosView";
import MobileHomeView from "../MobileHome/MobileHomeView";
import MobilePhotosView from "../MobilePhotos/MobilePhotosView";
import SmoothScroll from "../../components/SmoothScroll/SmoothScroll";
import Logo from "../../components/Logo/Logo";

//external
import Aos from "aos";
import "aos/dist/aos.css";
import ParticlesBg from "particles-bg";

class Root extends React.Component {
  state = {
    isHomeViewOpen: true,
    // width: window.innerWidth,
    isMobile: window.innerWidth <= 1050
  };

  navigationClicked = (param) => {
    SmoothScroll.handleScrollEvent(param);
  };

  setMobileMode = () => {
    console.log("jestem i nie sse");
    this.setState((prevState) => ({
      isMobile: !prevState.isMobile
    }));
  };

  ZobaczWiecejClicked = () => {
    this.setState((prevState) => ({
      isHomeViewOpen: !prevState.isHomeViewOpen
    }));

    console.log("mamy taki stan" + this.state.isMobile);

    if (this.state.isMobile) {
      this.navigationClicked("MOBILE__website__logo");
    } else {
      this.navigationClicked("website__logo");
    }
  };

  myFunction = () => {
    console.log("dzialam");
  };

  render() {
    let noBullets = {
      listStyleType: "none"
    };

    console.log("2mamy taki stan" + this.state.isMobile);

    Aos.init({ duration: 2000 });

    return (
      <>
        <ParticlesBg color="#D1D1D1" num={200} type="cobweb" bg={true} />
        <div className="website">
          {!this.state.isMobile ? (
            <>
              <div id="website__logo">
                <Logo />
              </div>

              <div className="website__nav">
                {this.state.isHomeViewOpen === true && (
                  <>
                    <div
                      onClick={() => {
                        this.navigationClicked("website__whatWeDo");
                      }}
                      className="website__nav__example website__nav__navItem"
                    >
                      <span className="hover hover-3">O nas&nbsp;</span>|
                    </div>
                    <div
                      onClick={() => {
                        this.navigationClicked("website__offer");
                      }}
                      className="website__nav__example website__nav__navItem"
                    >
                      <span className="hover hover-3">&nbsp;Oferta&nbsp;</span>|
                    </div>
                    <div
                      onClick={() => {
                        this.navigationClicked("website__portfolio");
                      }}
                      className="website__nav__example website__nav__navItem"
                    >
                      <span className="hover hover-3">
                        &nbsp;Portfolio&nbsp;
                      </span>
                      |
                    </div>
                    <div
                      onClick={() => {
                        this.navigationClicked("website__contact");
                      }}
                      className="website__nav__example website__nav__navItem"
                    >
                      <span className="hover hover-3">&nbsp;Kontakt&nbsp;</span>
                    </div>
                  </>
                )}
              </div>

              {this.state.isHomeViewOpen === true ? (
                <HomeView
                  isHomeViewOpen={this.state.isHomeViewOpen}
                  stateChange={this.ZobaczWiecejClicked}
                />
              ) : (
                <PhotosView stateChange={this.ZobaczWiecejClicked} />
              )}
            </>
          ) : (
            <>
              <div className="MOBILE__website">
                <div id="MOBILE__website__logo">
                  <Logo />
                </div>

                <label
                  className="MOBILE__website__hamburgerMenu"
                  htmlFor="toggle"
                ></label>

                {/* <button
                  className="MOBILE__website__hamburgerMenu"
                  onClick={this.myFunction}
                ></button> */}

                <input type="checkbox" name="toggle" id="toggle" />

                <div className="message">
                  <div className="MOBILE__website__nav">
                    {this.state.isHomeViewOpen === true && (
                      <>
                        <div
                          onClick={() => {
                            this.navigationClicked("MOBILE__website__whatWeDo");
                          }}
                          className="MOBILE__website__nav__example MOBILE__website__nav__navItem"
                        >
                          O nas&nbsp;
                        </div>
                        <div
                          onClick={() => {
                            this.navigationClicked("MOBILE__website__offer");
                          }}
                          className="MOBILE__website__nav__example MOBILE__website__nav__navItem"
                        >
                          &nbsp;Oferta&nbsp;
                        </div>
                        <div
                          onClick={() => {
                            this.navigationClicked(
                              "MOBILE__website__portfolio"
                            );
                          }}
                          className="MOBILE__website__nav__example MOBILE__website__nav__navItem"
                        >
                          &nbsp;Portfolio&nbsp;
                        </div>
                        <div
                          onClick={() => {
                            this.navigationClicked("MOBILE__website__contact");
                          }}
                          className="MOBILE__website__nav__example MOBILE__website__nav__navItem"
                        >
                          &nbsp;Kontakt&nbsp;
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {this.state.isHomeViewOpen === true ? (
                  <MobileHomeView
                    isHomeViewOpen={this.state.isHomeViewOpen}
                    stateChange={this.ZobaczWiecejClicked}
                  />
                ) : (
                  <MobilePhotosView stateChange={this.ZobaczWiecejClicked} />
                )}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Root;
