"use client";

import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { applyOfferCode } from "../services/api";

interface CartItem {
  id: string;
  name?: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const typedCartItems = cartItems as CartItem[];

  const [offerCode, setOfferCode] = useState<string>("");
  const [discountedTotal, setDiscountedTotal] = useState<number | null>(null);
  const [isApplying, setIsApplying] = useState<boolean>(false);

  const subtotal = (cartItems as CartItem[]).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Function to apply the offer code
  const applyOffer = async () => {
    setIsApplying(true);
    try {
      const newTotal = await applyOfferCode(offerCode, subtotal);
      setDiscountedTotal(newTotal); // Assuming applyOfferCode returns a number
    } catch (error) {
      console.error("Error applying offer code:", error);
    }
    setIsApplying(false);
  };

  // Total is either the discounted total or the subtotal
  const total = discountedTotal !== null ? discountedTotal : subtotal;

  // Handle quantity change in the cart
  const handleQuantityChange = (
    id: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="container mx-auto p-11">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-8">
            {typedCartItems.map((item, index) => (
              <li
                key={item.id ?? `item-${index}`}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id ?? "", e)}
                    className="w-16 px-2 py-1 border rounded"
                  />
                  <button
                    onClick={() => removeFromCart(item.id ?? "")}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mb-4">
            <label htmlFor="offerCode" className="block mb-2">
              Offer Code
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="offerCode"
                value={offerCode}
                onChange={(e) => setOfferCode(e.target.value)}
                className="flex-grow px-3 py-2 border rounded"
                placeholder="Enter offer code"
              />
              <button
                onClick={applyOffer}
                disabled={isApplying}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
              >
                {isApplying ? "Applying..." : "Apply"}
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Subtotal:</h2>
            <p className="text-xl">${subtotal.toFixed(2)}</p>
          </div>
          {discountedTotal !== null && (
            <div className="flex justify-between items-center mb-8 text-green-600">
              <h2 className="text-xl font-bold">Discount Applied:</h2>
              <p className="text-xl">
                -${(subtotal - discountedTotal).toFixed(2)}
              </p>
            </div>
          )}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Total:</h2>
            <p className="text-2xl font-bold">${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
            >
              Continue Shopping
            </Link>
            <Link
              href="/checkout"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
