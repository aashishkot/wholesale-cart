'use client'

import { useCart } from './CartProvider'
import { Product } from '../services/api'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <button 
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  )
}

