import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const DrinksProduct = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1300 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 701 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
    },
  };

  const productlists = props.products;

  return (
    <>
      <section className="home-products py-4">
        <div className="container">
          <div className="row no-gutters justify-content-between">
            <div className="col-9">
              <div className="main-heading text-left">
                <h3 className=""> Drinks </h3>
              </div>
            </div>
            <div className="col-3 text-right">
              <Link
                to="#"
                className="btn  px-lg-4 btn-outline-info btn-lg round-xl round"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
        <div className="  bg-items">
          <div className="row">
            <div className="col-12">
              <div className="js-products-slider">
                <Carousel
                  responsive={responsive}
                  draggable={true}
                  showDots={false}
                  infinite={true}
                  keyBoardControl={true}
                  arrows={false}
                >
                  {Array.isArray(productlists) && productlists.length > 0
                    ? productlists.map((item, index) => (
                        <div className="product-item" key={index}>
                          <div className="box">
                            <figure className="img-holder">
                              <img
                                className="img-fluid "
                                src={item.product_image}
                                alt="product img"
                              />
                            </figure>

                            <div className="caption ">
                              <a
                                href="product-details.php"
                                className="h6 font-weight-normal"
                              >
                                {item.product_name}
                                <span className="small d-block">
                                  {item.product_quantity}
                                </span>
                              </a>

                              <p className="text-light-blue h5  text-capitalize">
                                $ {item.product_price} /{" "}
                                {item.product_basic_unit}
                              </p>
                            </div>
                            <div className="btn-box ">
                              <button className="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                                {" "}
                                <i className="ti-plus"></i> add to cart
                              </button>

                              <div
                                className="cart-inc-dec btn btn-info round-xl round btn-lg btn-block"
                                style={{ display: "none" }}
                              >
                                <button type="button">
                                  <i className="ti-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  value="1"
                                  maxLength="2"
                                  max="10"
                                  size="1"
                                  id="number"
                                />
                                <button type="button">
                                  <i className="ti-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DrinksProduct;
