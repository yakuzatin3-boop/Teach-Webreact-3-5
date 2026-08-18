
import React from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaEye,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  
  if(!item) return null;
  const navigate = useNavigate();

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* ================= IMAGE ================= */}
      <div className="relative h-72 overflow-hidden bg-gray-100">

        <img
          onClick={()=>navigate(`/product/${item.id}`)}
          src={item.img?.[0]}
          alt={item.name}
          className="h-full w-full cursor-pointer object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />

        {/* Sale Badge */}
        {item.sale && (
          <span className="absolute left-4 top-4 rounded-full bg-red-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
            Sale
          </span>
        )}

        {/* New Badge */}
        {item.isNew && (
          <span className="absolute left-4 top-4 rounded-full bg-green-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
            New
          </span>
        )}

        {/* Wishlist */}
        <button
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-gray-500 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white"
        >
          <FaHeart />
        </button>

        {/* Quick View */}
        <button
          onClick={() => navigate(`/product/${item.id}`)}
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-16 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-blue-600 hover:text-white"
        >
          <FaEye />
          Quick View
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">

        {/* Brand + Category */}
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            {item.brand}
          </p>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
            {item.category}
          </span>
        </div>

        {/* Product Name */}
        <h2
          onClick={() => navigate(`/product/${item.id}`)}
          className="mb-3 cursor-pointer text-lg font-bold leading-6 text-gray-800 transition hover:text-blue-600"
        >
          {item.name}
        </h2>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-gray-300" />

          <span className="ml-2 text-sm font-medium text-gray-500">
            4.0
          </span>

          <span className="text-xs text-gray-400">
            (24)
          </span>
        </div>

        {/* Divider */}
        <div className="mb-4 border-t border-gray-100" />

        {/* Price + Cart */}
        <div className="flex items-center justify-between">

          {/* Price */}
          <div>
            {item.sale && item.oldPrice ? (
              <div className="flex items-center gap-2">
                <p className="text-2xl font-extrabold text-red-500">
                  ${item.price}
                </p>

                <p className="text-sm text-gray-400 line-through">
                  ${item.oldPrice}
                </p>
              </div>
            ) : (
              <p className="text-2xl font-extrabold text-gray-900">
                ${item.price}
              </p>
            )}

            <p className="mt-1 text-xs text-gray-400">
              Free shipping
            </p>
          </div>

          {/* Add Cart */}
          <button
            className="group/cart flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            <FaShoppingCart className="transition-transform duration-300 group-hover/cart:scale-110" />
            <span>Add</span>
          </button>
        </div>

        {/* View Details */}
        <button
          onClick={() => navigate(`/product/${item.id}`)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-blue-600 hover:text-blue-600"
        >
          View Details
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;