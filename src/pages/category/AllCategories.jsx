import React, { useEffect, useState } from "react";
import { request } from "../../api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AllCategories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.token.value);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await request.get("/product-category/get");
        setCategories(res.data);
      } catch (err) {
        alert("Xatolik kategoriyalarni ko'rishda");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (
        confirm("Do you really want to delete this category? Are you sure?")
      ) {
        const res = await request.delete(`product-category/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("You successfully deleted the category");
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== id)
        );
      }
    } catch (err) {
      alert("Xatolik kategoriyani o'chirishda");
      console.error(err.response?.data);
    }
  };

  const handleEditCategory = (id) => {
    navigate(`/create-category?q=${id}`);
  };

  const categoryItems = categories.map((item) => (
    <div
      key={item.id}
      className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-56 border border-gray-700"
    >
      <div>
        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-sm text-gray-300">{item.description}</p>
      </div>
      <div className="flex justify-end gap-4 w-full mt-auto">
        <button
          onClick={() => handleDelete(item.id)}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300"
        >
          Delete
        </button>
        <button
          onClick={() => handleEditCategory(item.id)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
        >
          Edit
        </button>
      </div>
    </div>
  ));

  return (
    <section className="min-h-screen bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          All Categories
        </h1>

        {loading ? (
          <div className="text-center text-gray-400 text-xl">
            <h2>Loading...</h2>
          </div>
        ) : categories.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {categoryItems}
          </div>
        ) : (
          <div className="text-center text-gray-400 text-xl">
            <h2>No categories available</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCategories;
