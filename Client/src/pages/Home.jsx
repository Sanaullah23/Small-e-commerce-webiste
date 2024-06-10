import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout/Layout";
import buckit from "../assets/siteimages/buckit.jpg";
import { useProduct } from "../context/Product";
import { useAuth } from "../context/Auth";
import { Link } from "react-router-dom";
import Pagination from "../components/home/Pagination";

const Home = ({ title }) => {
  const { pData, pageCount, setPageCount, page, setPage } = useProduct();
  const { auth } = useAuth();
  const [copyData, setCopyData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const isAdmin = auth?.user?.role === "admin"; // Adjust based on your auth structure

  useEffect(() => {
    setCopyData(pData);
  }, [pData]);

   //pagination functions

   const handlePrev=()=>{
     setPage(()=>{
      if(page === 1)return page;
      return page -1
     })
   }

   const handleNext=()=>{
    setPage(()=>{
     if(page === pageCount) return page;
     return page + 1
    })
  }

  const handleSearch = () => {
    let searchValueLower = searchValue.toLowerCase();
    console.log(searchValueLower);
    if (searchValueLower === "") {
      setCopyData(pData);
    } else {
      let searchData = pData.filter((product) => {
        return product.productName.toLowerCase().includes(searchValueLower);
      });
      setCopyData(searchData);
    }
  };
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="mb-4 relative">
        <div>
          <img src={buckit} alt="" className="w-full h-screen object-cover" />
        </div>
        <div className="absolute top-0 px-8 space-y-4">
          <h1 className="text-teal-200 text-[100px] font-medium">
            Unwrap Joy, <br /> Every Day.
          </h1>
          <p className="w-[40%] text-slate-200 text-justify">
            Discover the ultimate shopping experience with our curated selection
            of top-quality products, unbeatable deals, and seamless service.
            Shop with us and turn everyday purchases into moments of joy.
          </p>
          <button className="bg-gradient-to-b from-teal-200 to-teal-500 px-6 py-3 rounded-md font-medium text-slate-200">
            Buy Now
          </button>
        </div>
      </div>
      <section className="flex justify-between gap-1">
        <div className="w-[20%] bg-slate-100  py-2 h-[500px] ">
          <h1 className="text-[22px] font-medium bg-teal-400 px-1">Filter</h1>
          <div>
            <form
              className="px-1 py-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <input
                type="text"
                placeholder="search product"
                className="py-2 px-2 focus:outline-none rounded-md border-[1px] border-gray-500"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <button
                type="submit"
                className="ml-1 bg-teal-400 py-2 px-4 rounded-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="w-[80%] px-2 py-2 min-h-screen">
          <h1 className=" text-[22px] font-semibold bg-teal-300 mb-2 px-1">
            Products
          </h1>
          <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
            {copyData.map((product, index) => (
              <div
                key={index}
                className="bg-slate-50 w-[300px] border-[1px] border-gray-500 rounded-md pb-2 p-1"
              >
                <img
                  src={
                    `http://localhost:5173/src/assets/images/` + product.image
                  }
                  alt={product.productName}
                  className="w-full rounded-t-md"
                />
                <div className="px-2 space-y-1">
                  <h1>{product.productName}</h1>
                  <span className="bg-blue-500 px-1 rounded-full text-slate-100">
                    ${product.price}
                  </span>
                  <p>{product.description.substring(0, 34)}</p>
                </div>
                <div>
                  {isAdmin ? (
                    <div className="flex justify-between items-center mt-2  px-1">
                      <Link
                        to="#"
                        className="bg-blue-500 text-slate-100 px-4 py-1 rounded-md"
                      >
                        View
                      </Link>
                      <button className="bg-red-500 text-slate-100 px-4 py-1 rounded-md">
                        Delete
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center mt-2  px-1">
                      <Link
                        to="#"
                        className="bg-blue-500 text-slate-100 px-4 py-1 rounded-md"
                      >
                        View
                      </Link>
                      <button className="bg-green-500 text-slate-100 px-4 py-1 rounded-md">
                        Add to cart
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="text-center py-4">
        <Pagination handlePrev={handlePrev} handleNext= {handleNext}
        page={page}
        setPage={setPage}
        pageCount={pageCount}
        setPageCount={setPageCount} />
      </div>
    </Layout>
  );
};

export default Home;
