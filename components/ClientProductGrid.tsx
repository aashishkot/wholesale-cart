'use client'

import ProductGrid from './ProductGrid'
import { Product } from '../services/api'

export default function ClientProductGrid({ initialProducts }: { initialProducts: Product[] }) {
  return <ProductGrid initialProducts={initialProducts} />
}

