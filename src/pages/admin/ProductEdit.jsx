import React, { useState } from "react";
import { request } from "../../api";
import { useDispatch } from "react-redux";
import { toggleDelete } from "../../redux/slices/reload-slice";

const ProductEdit = ({ edit_data, close }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...edit_data });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      stock: +formData.stock,
      price: +formData.price,
      average_rating: 0,
    };

    request
      .patch(`/product/update/${edit_data.id}`, updatedData)
      .then((res) => {
        alert("Malumotlar muvaffaqiyatli yangilandi");
        return dispatch(toggleDelete(true));
      })
      .catch((err) => alert("Xatolik update qilishda"))

      .finally(() => {
        e.target.reset();
        dispatch(toggleDelete(false));
        close();
      });
  };

  return (
    <div className="bg-white">
      <span
        onClick={close}
        className="absolute top-4 right-10 text-2xl hover:cursor-pointer hover:opacity-80"
      >
        X
      </span>
      <h2 className="text-xl text-center mb-4 font-semibold">Update</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          value={formData.name}
          onChange={handleChange}
          required
          type="text"
          name="name"
          placeholder="name"
          className="outline-none py-2 px-2 rounded-lg mb-4 border-2 focus:border-indigo-500"
        />
        <input
          value={formData.description}
          onChange={handleChange}
          required
          type="text"
          name="description"
          placeholder="description"
          className="outline-none py-2 px-2 rounded-lg mb-4 border-2 focus:border-indigo-500"
        />
        <input
          value={formData.price}
          onChange={handleChange}
          required
          type="text"
          name="price"
          placeholder="price"
          className="outline-none py-2 px-2 rounded-lg mb-4 border-2 focus:border-indigo-500"
        />
        <input
          value={formData.image}
          onChange={handleChange}
          required
          type="text"
          name="image"
          placeholder="image url"
          className="outline-none py-2 px-2 rounded-lg mb-4 border-2 focus:border-indigo-500"
        />
        <input
          value={formData.stock}
          onChange={handleChange}
          required
          type="text"
          name="stock"
          placeholder="stock"
          className="outline-none py-2 px-2 rounded-lg mb-4 border-2 focus:border-indigo-500"
        />
        <input
          type="submit"
          value="Submit"
          className="outline-none cursor-pointer hover:bg-[dodgerblue] py-2 px-2 rounded-lg mb-4 border-2 focus:border-indigo-500"
        />
      </form>
    </div>
  );
};

export default ProductEdit;
