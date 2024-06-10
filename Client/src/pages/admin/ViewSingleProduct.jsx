import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import AdminLayout from "./AdminLayout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewSingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  const getProductDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/product/get-single-product/${id}`
      );
      setSingleProduct(res?.data.singelproduct);
    } catch (error) {
      console.log("not found");
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);
  console.log(id);

  return (
    <Layout>
      <AdminLayout>
        <div className="w-[60rem]">
          <h1 className="text-center text-[24px] font-bold bg-teal-600 text-zinc-50">
            PRODUCT DETAILS
          </h1>
          <div className="bg-teal-200 px-2 py-1  h-[35.2rem] rounded-b-md">
            <div className="w-[40%] bg-slate-200 px-5 py-2 rounded-md mx-auto">
              <img
                src={
                  `http://localhost:5173/src/assets/images/` +
                  singleProduct.image
                }
                alt={singleProduct.productName}
                className="w-full h-[200px] border-[1px] border-gray-400 rounded-md"
              />
              <div className="space-y-6">
                <h1 className="text-[20px] font-medium mt-1 px-2 py-1 italic ">
                  {singleProduct.productName}
                </h1>
                <p className="flex  justify-between">
                  <span className="bg-gray-300 px-2 py-1 rounded-full">
                    Category/ {singleProduct.category}
                  </span>
                  <span className="bg-gray-300 px-2 py-1 rounded-full">
                    Price: ${singleProduct.price}
                  </span>
                </p>
                <p className="overflow-y-auto h-[200px]">
                  {singleProduct.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </Layout>
  );
};

export default ViewSingleProduct;
