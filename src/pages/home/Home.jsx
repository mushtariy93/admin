// import { request } from '@/api'
import Products from '@/components/Products'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Home = () => {
  const {data,error,loading} = useFetch("/product/get")

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      <Products isAdmin={false} data={data} />
    </div>
  );
}

export default Home