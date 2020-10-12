//react
import React, { useEffect } from "react";

//components
import DecorationArrow from "../../components/DecorationComponents/DecorationArrow/DecorationArrow";
import ImagePort from "../../components/ImagePort/ImagePort";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ImageCarouselMulti from "../../components/ImageCarouselMulti/ImageCarouselMulti";

//resources
import img1A from "../../Photos/A1.jpg";
import img1B from "../../Photos/A2.jpg";
import img2A from "../../Photos/B2.jpg";
import img2B from "../../Photos/B1.jpg";
import img3A from "../../Photos/C1.jpg";
import img3B from "../../Photos/C2.jpg";
import beforeWorkGraphic from "../../draft.png";
import afterWorkGraphic from "../../wall.png";
import downArrowGraphic from "../../down-arrow.png";
import draftGraphic from "../../draft.png";
import wallGraphic from "../../wall.png";
import Logo from "../../components/Logo/Logo";

//external
import ParticlesBg from "particles-bg";

class Home extends React.Component {
  render(props) {
    let noBullets = {
      listStyleType: "none"
    };
    return (
      <>
        <div id="website__whatWeDo">
          <div className="website__whatWeDo__halfWhatWeDoSection">
            {/* <div className="website__whatWeDo__halfWhatWeDoSection__adPassword">
              #Zostań w domu, remont zostaw nam.
              <i className="fa fa-cog fa-spin fa fa-fw"></i>
            </div> */}

            <div className="website__whatWeDo__halfWhatWeDoSection__sectionContent">
              <h4></h4>
              #Zostań w domu, remont zostaw nam.
              <i className="fa fa-cog fa-spin fa fa-fw"></i>
              <br></br>
              <br></br>
              <b>interbuild.</b> – to firma remontowo-wykończeniowa, działająca
              na rynku polskim już ponad 10 lat. Przez ten cały czas
              zapracowaliśmy sobie na zaufanie wielu klientów z całej Polski.
              Stawiamy przede wszystkim na skrupulatne zabezpieczenie
              powierzchni przed wykonaniem usługi jak i wysoką jakość
              stosowanych produktów, przez co precyzja i poziom wykonania usług
              zadowoli najbardziej wymagających klientów.
              <DecorationArrow
                point="website__offer"
                src={downArrowGraphic}
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="website__whatWeDo__halfWhatWeDoSection">
            <div className="website__whatWeDo__halfWhatWeDoSection__rightFrontPage">
              <div className="website__whatWeDo__halfWhatWeDoSection__rightFrontPage__photosCarousel">
                <ImageCarousel />
                <div className="website__whatWeDo__halfWhatWeDoSection__rightFrontPage__photosCarousel_overlay">
                  <div className="website__whatWeDo__halfWhatWeDoSection__rightFrontPage__photosCarousel_overlay_text">
                    Jesteśmy autoryzowanymi wykonawcami firmy Greinplast
                    {/*   Do każdego Klienta podchodzimy indywidualnie, oferujemy profesjonalne doradztwo, pomiar oraz darmową wycenę.<br></br>
                        Współpracujemy z wieloma projektantami wnętrz jak i z architektami, przez co nasze prace zawsze są dopięte do najmniejszych szczegółów. */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="website__offer">
          <br></br>
          <br></br>

          <div className="website__offer__sectionContent">
            <br></br>
            <br></br>
            <div className="website__offer__sectionContent__Columns">
              <div className="website__offer__sectionContent__Columns__Column">
                <div className="website__offer__sectionContent__Columns__Column__photosCarouselMulti">
                  <ImageCarouselMulti />
                </div>
              </div>
              <div className="website__offer__sectionContent__Columns__Column">
                <b> Oferta</b> <br></br>
                <br></br>
                Oferujemy kompleksowe wykończenia wnętrz, od stanu
                deweloperskiego, aż po sam klucz. Specjalizujemy się w układaniu
                płytek typu monolit, wielkoformatowe jak i kamień naturalny.
                Dodatkowo wszelkiego rodzaju tynki dekoracyjne takie jak: beton,
                cegła, tapety 3D, stiuki itp. Zakres usług:<br></br>
                <br></br>
                <b>Prace wykończeniowe:</b>
                <ul style={noBullets}>
                  <li>
                    <i className="fa fa-paint-brush" aria-hidden="true"></i>{" "}
                    malowanie ścian i sufitów
                  </li>
                  <li>
                    <i className="fa fa-paint-brush" aria-hidden="true"></i>{" "}
                    tapetowanie
                  </li>
                  <li>
                    <i className="fa fa-paint-brush" aria-hidden="true"></i>{" "}
                    nakładanie gładzi szpachlowej
                  </li>
                  <li>
                    <i className="fa fa-paint-brush" aria-hidden="true"></i>{" "}
                    układanie paneli podłogowych i ściennych
                  </li>
                </ul>
                <b>Prace murarsko-tynkarskie:</b>
                <ul style={noBullets}>
                  <li>
                    <i className="fa fa-wrench" aria-hidden="true"></i>{" "}
                    wykonywanie ścianek działowych
                  </li>
                  <li>
                    <i className="fa fa-wrench" aria-hidden="true"></i>{" "}
                    tynkowanie
                  </li>
                </ul>
                <b>Prace Glazurnicze:</b>
                <ul style={noBullets}>
                  <li>
                    <i className="fa fa-wrench" aria-hidden="true"></i>{" "}
                    układanie płytek, monolitów, gresu i terakoty
                  </li>
                  <li>
                    <i className="fa fa-wrench" aria-hidden="true"></i>{" "}
                    kompleksowe remonty łazienek
                  </li>
                </ul>
                <b>Montaż płyt kartonowo-gipsowych:</b>
                <ul style={noBullets}>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>{" "}
                    wykonywanie podwieszanych sufitów
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>{" "}
                    wykonywanie ścian działowych
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>{" "}
                    wykonywanie różnego rodzaju zabudowy
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>{" "}
                    kwykonywanie półek
                  </li>
                </ul>
                <b>Inne:</b>
                <ul style={noBullets}>
                  <li>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                    przenoszenie punktów elektrycznych
                  </li>
                  <li>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                    przenoszenie punktów hydraulicznych
                  </li>
                  <li>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                    składanie mebli
                  </li>
                  <li>
                    <i className="fa fa-heart-o" aria-hidden="true"></i> montaż
                    armatury łazienkowej
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="website__decorationArrowAnimation">
          <DecorationArrow
            point="website__portfolio"
            src={downArrowGraphic}
            width={50}
            height={50}
          />
        </div>
        <div id="website__portfolio">
          <div className="website__portfolio__sideBar">100% satysfakcji</div>
          <div className="website__portfolio__imgSection">
            <h4>Portfolio</h4>
            <div
              data-aos="fade-left"
              className="website__portfolio__imgSection__beforeAfterImgs"
            >
              <div className="website__portfolio__imgSection__beforeAfterImgs__compareImages website__portfolio__imgSection__beforeAfterImgs__beforeImg">
                <ImagePort src={img3A} />
                <div className="website__portfolio__imgSection__beforeAfterImgs__beforeImg__beforeImgGraphic">
                  <img
                    className="website__portfolio__imgSection__beforeAfterImgs__beforeImg__beforeImgGraphic__draftGraphic"
                    src={draftGraphic}
                  />
                </div>
              </div>
              <div className="website__portfolio__imgSection__beforeAfterImgs__compareImages website__portfolio__imgSection__beforeAfterImgs__afterImg">
                <ImagePort src={img3B} />
                <div className="website__portfolio__imgSection__beforeAfterImgs__afterImg__afterImgGraphic">
                  <img
                    className="website__portfolio__imgSection__beforeAfterImgs__afterImg__afterImgGraphic__wallGraphic"
                    src={wallGraphic}
                  />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="website__portfolio__imgSection__beforeAfterImgs"
            >
              <div className="website__portfolio__imgSection__beforeAfterImgs__compareImages website__portfolio__imgSection__beforeAfterImgs__beforeImg">
                <ImagePort src={img1A} />
                <div className="website__portfolio__imgSection__beforeAfterImgs__beforeImg__beforeImgGraphic">
                  <img
                    className="website__portfolio__imgSection__beforeAfterImgs__beforeImg__beforeImgGraphic__draftGraphic"
                    src={draftGraphic}
                  />
                </div>
              </div>
              <div className="website__portfolio__imgSection__beforeAfterImgs__compareImages website__portfolio__imgSection__beforeAfterImgs__afterImg">
                <ImagePort src={img1B} />
                <div className="website__portfolio__imgSection__beforeAfterImgs__afterImg__afterImgGraphic">
                  <img
                    className="website__portfolio__imgSection__beforeAfterImgs__afterImg__afterImgGraphic__wallGraphic"
                    src={wallGraphic}
                  />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="website__portfolio__imgSection__beforeAfterImgs"
            >
              <div className="website__portfolio__imgSection__beforeAfterImgs__compareImages website__portfolio__imgSection__beforeAfterImgs__beforeImg">
                <ImagePort src={img2A} />
                <div className="website__portfolio__imgSection__beforeAfterImgs__beforeImg__beforeImgGraphic">
                  <img
                    className="website__portfolio__imgSection__beforeAfterImgs__beforeImg__beforeImgGraphic__draftGraphic"
                    src={draftGraphic}
                  />
                </div>
              </div>
              <div className="website__portfolio__imgSection__beforeAfterImgs__compareImages website__portfolio__imgSection__beforeAfterImgs__afterImg">
                <ImagePort src={img2B} />
                <div className="website__portfolio__imgSection__beforeAfterImgs__afterImg__afterImgGraphic">
                  <img
                    className="website__portfolio__imgSection__beforeAfterImgs__afterImg__afterImgGraphic__wallGraphic"
                    src={wallGraphic}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.props.isHomeViewOpen === true && (
          <div className="website__seeMore" onClick={this.props.stateChange}>
            Zobacz wiecej
          </div>
        )}

        <div id="website__contact">
          <h4>Kontakt</h4>
          <div className="website__contact__sectionContent">
            interbuild Krzysztof Wojtysiak<br></br>
            Telefon: 884 706 234 / 605987121<br></br>
            E-mail: kw.interbuild@gmail.com<br></br>
            NIP: 829-174-44-64<br></br>
            <br></br>
          </div>
        </div>

        {/* <svg className="svgClass" height="80" width="400">
            <g fill="none" stroke="#d1d1d1">
              <path class="svgAnim" stroke-width="2" d="M5 20 l215 0" />
            </g>
          </svg> */}
        <div className="website__footer">
          Paweł Łabuz pawel.labuz10@gmail.com
        </div>
      </>
    );
  }
}

export default Home;
