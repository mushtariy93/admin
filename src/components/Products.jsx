import { request } from '@/api';
import React from 'react'
import { FaRegHeart, FaTrashAlt  } from "react-icons/fa";

const Products = ({data, isAdmin}) => {

  const handleDelete = id => {
    if(confirm("are you sure ?")){
      request
        .delete(`/product/delete/${id}`)
        .then(res => {
        })
    }
  }

  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className=" container w-80 p-4 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 mt-10"
    >
      <img src={product.image} className="w-full h-60 object-cover" alt="" />
      <h3 className="ext-lg text-green-600 font-bold mb-2">{product.name} </h3>
      <p className=" text-xl font-semibold text-violet-700 mb-2">
        {product.price} USD
      </p>
      {isAdmin ? (
        <button onClick={() => handleDelete(product.id)}>
          <FaTrashAlt />
        </button>
      ) : (
        <button>
          <FaRegHeart />
        </button>
      )}
    </div>
  ));
  return (
    <div className='flex gap-3 flex-wrap container mx-auto'>{productItems}</div>
  )
}

export default Products