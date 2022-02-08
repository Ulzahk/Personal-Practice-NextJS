import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter()
  return (
    <div>
      <h1>This is page for a specific product: {id}</h1>
    </div>
  )
}

export default ProductItem
