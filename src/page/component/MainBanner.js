import React from "react";
import SLIDER1 from "./../../assets/images/home/banner-img.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const MainBanner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="home-banner">
        <div className="banner pt-5 border d-flex justify-content-center">
          <div className="w-100 mb-5 align-self-end pt-5">
            <div className="js-main-slider align-self-end">
              <Carousel
                responsive={responsive}
                draggable={true}
                showDots={true}
                infinite={true}
                keyBoardControl={true}
                arrows={false}
              >
                <div className="item item-carousel">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <div className="caption ">
                        <h2 className="heading-lg text-light">
                          We deliver all kind of grocery in reliable cost which
                          is best for you.
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-holder">
                        <img
                          className="img-fluid "
                          src={SLIDER1}
                          alt="banner img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="d-md-flex justify-content-center">
                    <div className="col-md-6">
                      <div className="caption ">
                        <h2 className="heading-lg text-light">
                          We deliver all kind of grocery in reliable cost which
                          is best for you.
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-holder">
                        <img
                          className="img-fluid "
                          src={SLIDER1}
                          alt="banner img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBanner;
