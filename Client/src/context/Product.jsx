import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [pData, setPData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/product/getallproducts/${page}`
      );
      setPData(res?.data.products);
      setPageCount(res?.data.pagination.pageCount);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  return (
    <ProductContext.Provider
      value={{ pData, setPData, pageCount, setPageCount, page, setPage }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
