import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import lady from "../../../src/img/Projects/lady.png";
import mike from "../../../src/img/Projects/mike.png";
import man from "../../../src/img/Projects/man.png";
import shape from "../../../src/img/Projects/shape-bg.png";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    /*responsive part*/
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <section id={props.id || ""}>
        <ScreenHeading
          title={"Projects"}
          subHeading={"What Projects I have done"}
        />
      </section>
      <section className="projects-section">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="project-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="proj-item">
                  <div className="proj-comments">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Benji and when He delivered, I honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobaals</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="proj-item">
                  <div className="proj-comments">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Benji and when He delivered, I honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src={mike} alt="no internet connection"></img>
                    <h5>A Honest Nigga</h5>
                    <p>Some random man</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="proj-item">
                  <div className="proj-comments">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Benji and when He delivered, I honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src={man} alt="no internet connection"></img>
                    <h5>Whitest dude</h5>
                    <p>Some rnadom pics</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="proj-item">
                  <div className="proj-comments">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Benji and when He delivered, I honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src={man} alt="no internet connection"></img>
                    <h5>Whitest dude</h5>
                    <p>Some rnadom pics</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
