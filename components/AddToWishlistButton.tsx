'use client'

import { useWishlist } from './WishlistProvider'
import { Product } from '../services/api'

export default function AddToWishlistButton({ product }: { product: Product }) {
  const { addToWishlist, wishlistItems } = useWishlist()

  const isInWishlist = wishlistItems.some(item => item.id === product.id)

  return (
    <button 
      onClick={() => addToWishlist(product)}
      className={`px-6 py-2 rounded ${isInWishlist ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}
    >
      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  )
}

