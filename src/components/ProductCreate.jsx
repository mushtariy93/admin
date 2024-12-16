import { request } from "@/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductCreate = () => {
  const token = useSelector((state) => state.token.value);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    request.get("/product-category/get").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const product = Object.fromEntries(formData);

    product.price = +product.price;
    product.categoryId = +product.categoryId;
    product.stock = +product.stock;
    product.average_rating = 0;

    request.post("/product/create", product);
  };

  return (
    <div className="min-h-screen bg-[#73628A] flex items-center justify-center py-10">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create New Product
        </h1>
        <form onSubmit={handleCreateProduct} className="space-y-4 ">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Name
            </label>
            <input
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="description"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2"
            >
              Price
            </label>
            <input
              id="price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              name="price"
              required
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Image URL
            </label>
            <input
              id="image"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="image"
              required
            />
          </div>

          <div>
            <label
              htmlFor="categoryId"
              className="block text-gray-700 font-medium mb-2"
            >
              Category
            </label>
            <select
              id="categoryId"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="categoryId"
              required
            >
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="stock"
              className="block text-gray-700 font-medium mb-2"
            >
              Stock
            </label>
            <input
              id="stock"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              name="stock"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
