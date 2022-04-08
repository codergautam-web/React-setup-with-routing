import React, { useEffect, useState } from "react";
import { getProductList } from "../request/request";
import DrinksProduct from "./component/DrinksProduct";
import FruitsProduct from "./component/FruitProducts";
import MainBanner from "./component/MainBanner";
import ModalButton from "./component/ModalButton";
import RecomendedProduct from "./component/RecomendedProduct";
import VegetableProduct from "./component/VegetableProduct";

const Home = () => {
  const [productList, setProductList] = useState("");
  useEffect(() => {
    getProductlist();
    //eslint-disable-next-line
  }, []);

  const getProductlist = () => {
    getProductList().then(async (result) => {
      setProductList(result.data.products);
    });
  };

  return (
    <>
      <main className="page-wrapper">
        <MainBanner />

        {productList !== "" ? <RecomendedProduct products={productList} />  : null}
        {productList !== "" ? <DrinksProduct products={productList} /> : null}
        {productList !== "" ? <FruitsProduct products={productList} /> : null}
        {productList !== "" ? <VegetableProduct products={productList} /> : null}

        <ModalButton />
      </main>
    </>
  );
};

export default Home;
