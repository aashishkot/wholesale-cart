'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Toys']

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
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
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {categories.map((category) => (
              <a
                key={category}
                href={`/category/${category.toLowerCase().replace(' & ', '-')}`}
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
  )
}

