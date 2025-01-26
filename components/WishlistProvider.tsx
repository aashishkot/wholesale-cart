'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Product } from '../services/api'

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}

export default function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([])

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist')
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
  }, [wishlistItems])

  const addToWishlist = (item: Product) => {
    setWishlistItems(prevItems => {
      if (!prevItems.some(i => i.id === item.id)) {
        return [...prevItems, item]
      }
      return prevItems
    })
  }

  const removeFromWishlist = (id: string) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

