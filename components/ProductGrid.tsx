"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../services/api";

interface ProductGridProps {
  initialProducts: Product[];
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);

  const loadMoreProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const newProducts = await response.json();
      setProducts([...products, ...newProducts]);
    } catch (error) {
      console.error("Error loading more products:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {products.length % 12 === 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMoreProducts}
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
