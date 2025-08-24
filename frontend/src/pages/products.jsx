import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const renderproduct = products.map((product) => {
    return (
      <div className='w-[25%] mr-3 mb-3 border shadow' key={product.id}>
        <img className='w-full h-[50%] object-cover' src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className="p-4 flex justify-between items-center">
          <p className="text-lg font-bold">${product.price}</p>
          <button className="p-3 mt-3 bg-blue-500 text-white py-1 px-4 rounded">Add to Cart</button>
        </div>
        <Link className='text-blue-500 w-full block m-auto' to={`/product/${product.id}`}>View Details</Link>
      </div>
    );
  });

  return (
    products.length > 0 ? <div className='overflow-auto flex flex-wrap'>{renderproduct}</div> : <div>No Products Found</div>
  )
}

export default Products
