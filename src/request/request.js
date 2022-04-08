import { URL_STRING } from "./api";

const headers = {
  "Content-type": "application/json",
};

export const getProductList = async () => {
  const response = await fetch(`${URL_STRING}product/product-list`, {
    headers,
  });

  const data = await response.json();
  return data;
};


export const getCategoryList = async () => {
    const response = await fetch(`${URL_STRING}product/category-list`, {
      headers,
    });
  
    const data = await response.json();
    return data;
  };
  