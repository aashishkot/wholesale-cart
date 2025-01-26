"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  User2Icon,
} from "lucide-react";
import { useCart } from "./CartProvider";
import { useWishlist } from "./WishlistProvider";
import Image from "next/image";

const categories = [
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports",
  "Toys",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  return (
    <header className="py-2 sticky top-0 bg-white shadow-md z-50 mt-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/images/wholesale-2.png"
            alt="Logo"
            width={300}
            height={0}
          />
        </Link>
        <div className="flex items-center space-x-4 w-full mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border rounded-full w-full"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-1 bg-gray-100 px-4 py-2 rounded-full"
            >
              <span>Categories</span>
              <ChevronDown size={16} />
            </button>
            {isOpen && (
              <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`/category/${category
                        .toLowerCase()
                        .replace(" & ", "-")}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/cart" className="relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItems.length}
            </span>
          </Link>
          <Link href="/wishlist" className="relative">
            <Heart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {wishlistItems.length}
            </span>
          </Link>
          <Link href="/login" className="relative">
            <User2Icon size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}
