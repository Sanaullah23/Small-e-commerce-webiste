import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import AdminLayout from "./AdminLayout";
import axios from "axios";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [photo, setPhoto] = useState();
  const [createProduct, setCreateProduct] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setCreateProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", createProduct.productName);
    formData.append("description", createProduct.description);
    formData.append("price", createProduct.price);
    formData.append("category", createProduct.category);
    formData.append("image", photo);

    try {
      const res = await axios.post("http://localhost:8080/api/v1/product/create-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success("Product created successfully");
        console.log(res.data);
        setCreateProduct({
          productName: "",
          description: "",
          price: "",
          category: "",
        })
        setPhoto("")
      } else {
        alert("Product creation failed");
        console.log(res.data);
      }
    } catch (error) {
      alert("Error in product creation");
      console.error(error);
    }
  };

  return (
    <Layout>
      <AdminLayout>
        <div className="w-[60rem]">
          <h1 className="text-center text-[24px] font-bold bg-teal-600 text-zinc-50">
            CREATE PRODUCT
          </h1>

          <div className="bg-teal-200 rounded-sm px-2 py-1 h-[35.2rem] rounded-b-md flex">
            <div className="w-[300px]">
              <h3 className="text-center text-[18px] py-4 font-medium">Image Preview</h3>
              {photo && (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="productImage"
                  className="w-[250px] h-[230px]"
                />
              )}
            </div>
            <form onSubmit={handleCreate} className="flex flex-col justify-center gap-4 w-[400px] m-auto">
              <h1 className="text-center text-2xl font-medium py-2">Add Product</h1>
              <div className="flex flex-col items-stretch gap-4">
                <input
                  type="text"
                  name="productName"
                  value={createProduct.productName}
                  placeholder="Enter Product Name"
                  className="px-4 py-3 rounded-md"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="price"
                  value={createProduct.price}
                  placeholder="Enter Product Price"
                  className="px-4 py-3 rounded-md"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="category"
                  value={createProduct.category}
                  placeholder="Enter Product Category"
                  className="px-4 py-3 rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <textarea
                    rows="5"
                    cols="80"
                    name="description"
                    value={createProduct.description}
                    className="h-32 w-full resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <label
                    htmlFor="photo"
                    className="px-4 bg-slate-50 py-2 cursor-pointer font-medium w-full text-center"
                  >
                    {photo ? photo.name : " Upload Image"}
                    <input
                      type="file"
                      id="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <button className="px-6 py-3 bg-slate-50 text-[18px] rounded-md font-medium">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    </Layout>
  );
};

export default CreateProduct;
