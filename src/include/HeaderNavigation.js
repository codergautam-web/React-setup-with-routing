import React, { useEffect, useState } from "react";
import SPEACIAL from "./../assets/images/icons/grocery.png";
import VEGETABLES from "./../assets/images/icons/vegetables.png";
import FRUITS from "./../assets/images/icons/fruits.png";
import DRINKS from "./../assets/images/icons/drinks.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getCategoryList } from "../request/request";

const HeaderNavigation = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategory();
    //eslint-disable-next-line
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const getCategory = () => {
    getCategoryList().then(async (result) => {
      setCategoryList(result.data.categories);
      console.log(result.data.categories);
    });
  };

  const NavigationArr = [
    {
      category_image: SPEACIAL,
      category_name: "specials",
    },
    {
      category_image: VEGETABLES,
      category_name: "vegetables",
    },
    {
      category_image: FRUITS,
      category_name: "fruits",
    },
    {
      category_image: DRINKS,
      category_name: "drinks",
    },
    {
      category_image: SPEACIAL,
      category_name: "specials",
    },
    {
      category_image: VEGETABLES,
      category_name: "vegetables",
    },
    {
      category_image: FRUITS,
      category_name: "fruits",
    },
    {
        category_image: DRINKS,
      category_name: "drinks",
    },
    {
      category_image: SPEACIAL,
      category_name: "specials",
    },
    {
      category_image: VEGETABLES,
      category_name: "vegetables",
    },
    {
      category_image: FRUITS,
      category_name: "fruits",
    },
    {
      category_image: DRINKS,
      category_name: "drinks",
    },
  ];

  return (
    <>
      {Array.isArray(NavigationArr) && NavigationArr.length > 0 ? (
        <div class="navigations js-menu-slider sticky-top">
          <Carousel
            responsive={responsive}
            draggable={true}
            showDots={false}
            infinite={true}
            keyBoardControl={true}
            arrows={false}
            autoPlay={true}
          >
            {NavigationArr.map((item, index) => (
              <li className="nav-item " key={index}>
                <a className="nav-link" href="#">
                  <span>
                    <i
                      className={`icon ${item.category_name}"`}
                      style={{
                        backgroundImage: "url(" + item.category_image + ")",
                      }}
                    ></i>
                    {item.category_name}
                  </span>
                </a>
              </li>
            ))}
          </Carousel>
        </div>
      ) : null}
    </>
  );
};

export default HeaderNavigation;
