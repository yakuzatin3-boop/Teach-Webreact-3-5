import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaCartPlus, FaHeart } from "react-icons/fa6";
import { ProductData } from "../../data/ProductData";
import ProductCard from "./ProductCard";

function Productdetail() {
  const { id } = useParams();

  const product = ProductData.find(
    (item) => item.id === Number(id)
  );

  // Product not found
  if (!product) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-600">
          Product not found
        </h2>
      </div>
    );
  }

  const [selectimage, setselectimage] = useState(product.img[0]);

  // Related products from the same brand

  const relateproduct = ProductData.filter((item)=>item.brand === product.brand && item.id !== product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* ================= PRODUCT DETAIL ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ================= LEFT ================= */}
        <div>

          {/* Main Image */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
            <img
              src={selectimage}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4 mt-5">

            {product.img.map((image, index) => (
              <button
                key={index}
                onClick={() => setselectimage(image)}
                className={`
                  overflow-hidden rounded-xl border-2
                  transition
                  ${
                    selectimage === image
                      ? "border-blue-500"
                      : "border-gray-200 hover:border-blue-300"
                  }
                `}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-24 w-full object-cover"
                />
              </button>
            ))}

          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="text-sm text-blue-600 font-semibold uppercase">
            {product.category}
          </p>

          {/* Product Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">

            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} />
              ))}
            </div>

            <span className="text-gray-600">
              {product.rating}
            </span>

            <span className="text-gray-400">
              ({product.reviews} reviews)
            </span>

          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mt-6">

            <span className="text-4xl font-bold text-blue-600">
              ${product.price}
            </span>

            {product.originalprice && (
              <span className="text-xl text-gray-400 line-through">
                ${product.originalprice}
              </span>
            )}

            {product.discount && (
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                -{product.discount}%
              </span>
            )}

          </div>

          {/* Description */}
          <p className="text-gray-600 leading-7 mt-6">
            {product.description}
          </p>

          {/* Stock */}
          <div className="mt-6">

            {product.stock > 0 ? (
              <p className="text-green-600 font-semibold">
                ✓ In Stock ({product.stock} available)
              </p>
            ) : (
              <p className="text-red-600 font-semibold">
                ✕ Out of Stock
              </p>
            )}

          </div>

          {/* Colors */}
          {product.colors?.length > 0 && (
            <div className="mt-6">

              <h3 className="font-semibold text-gray-900 mb-3">
                Color
              </h3>

              <div className="flex gap-3 flex-wrap">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border rounded-lg hover:border-blue-500 hover:text-blue-500 transition"
                  >
                    {color}
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* Size */}
          {product.sizes?.length > 0 && (
            <div className="mt-6">

              <h3 className="font-semibold text-gray-900 mb-3">
                Size
              </h3>

              <div className="flex gap-3 flex-wrap">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border rounded-lg hover:border-blue-500 hover:text-blue-500 transition"
                  >
                    {size}
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <button
              className="flex-1 flex items-center justify-center gap-2
                         bg-blue-600 text-white py-4 rounded-xl
                         font-semibold hover:bg-blue-700 transition"
            >
              <FaCartPlus />
              Add to Cart
            </button>

            <button
              className="px-5 border border-gray-300 rounded-xl
                         hover:bg-red-50 hover:text-red-500 transition"
            >
              <FaHeart />
            </button>

          </div>

        </div>
      </div>

      {/* ================= SPECIFICATIONS ================= */}
      <div className="mt-16">

        <h2 className="text-2xl font-bold mb-6">
          Specifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {Object.entries(product.specification).map(
            ([key, value]) => (
              <div
                key={key}
                className="flex justify-between p-4
                           bg-gray-50 rounded-xl"
              >
                <span className="font-semibold capitalize">
                  {key}
                </span>

                <span className="text-gray-600">
                  {value}
                </span>
              </div>
            )
          )}

        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="mt-16">

        <h2 className="text-2xl font-bold mb-4">
          Description
        </h2>

        <p className="text-gray-600 leading-7">
          {product.description}
        </p>

      </div>

      {/* ================= RELATED PRODUCTS ================= */}
        <div className="mt-16">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold">
              Related Products
            </h2>

            <span className="text-gray-500">
              More from {product.brand}
            </span>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {relateproduct.map((product)=>(
              <ProductCard key={product.id} item={product}/>
            ))}

          </div>

        </div>

    </div>
  );
}

export default Productdetail;