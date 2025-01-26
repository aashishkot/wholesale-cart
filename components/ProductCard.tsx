"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ScanEye, ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";
import { useWishlist } from "./WishlistProvider";
import { Product } from "@/app/services/api";

interface ProductCardProps extends Product {}

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();

  const isInWishlist = wishlistItems.some((item) => item.id === id);

  return (
    <div className="shadow-md bg-slate-50 rounded-lg border overflow-hidden relative hover:border-blue-300 transition duration-300 ease-in-out">
      <button
        title="Add To Wish List"
        onClick={() =>
          addToWishlist({ id, name, price, image, description: "" })
        }
        className={`p-2 rounded-full absolute right-2 top-2 ${
          isInWishlist ? "bg-red-100" : "bg-gray-200"
        }`}
      >
        <Heart
          size={20}
          className={isInWishlist ? "text-red-500" : "text-gray-500"}
        />
      </button>
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="w-auto mx-auto h-[170px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg h-[50px] font-light mb-2 text-ellipsis overflow-hidden ">
          {name}
        </h3>
        <p className="text-2xl font-bold mb-4 text-right">
          ${price.toFixed(2)}
        </p>
        <div className="flex justify-between items-center mb-2">
          <Link
            href={`/product/${id}`}
            className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600"
          >
            <ScanEye className="inline" /> Details
          </Link>
          <button
            onClick={() =>
              addToCart({ id, name, price, image, description: "" })
            }
            className="w-auto bg-orange-600 text-white px-2 py-2 rounded hover:bg-slate-600"
          >
            <ShoppingCart className="inline mx-2 text-sm" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
