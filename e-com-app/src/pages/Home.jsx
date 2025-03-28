import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Link>
      <div className="min h-screen px-common-mobile-padding sm:px-common-laptop-padding ">
        <h1 className="text-2xl pt-8 font-bold "> All Products</h1>
        <div className="px-common-mobile-padding grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {products.map((product) => (
            <div key={product.id} className="border w-100 p-4">
              <div className="h-common-height w-image-common-width">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-common-mobile-padding sm:px-common-laptop-padding">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-sm text-gray-500">
                  Rating: {product.rating}/5
                </p>
                <button className="bg-amber-500 text-white px-4 py-2 mt-2 rounded">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Home;
