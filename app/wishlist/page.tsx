"use client";

import { useWishlist } from "@/components/WishlistProvider";
import { useCart } from "@/components/CartProvider";
import Image from "next/image";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto p-11 col-span-5">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-s-slate-300"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
                <div className="flex flex-col space-y-2">
                  <Link
                    href={`/product/${item.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => {
                      addToCart(item);
                      removeFromWishlist(item.id);
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
