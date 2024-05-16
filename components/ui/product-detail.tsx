import { Products } from '@/types';
import Image from 'next/image';
import React from 'react'

interface ProductDetailProps {
    product: Products;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {

  return (
    <div className='grid sm:grid-cols-2 '>
        <div className='max-w-lg grid'>
            <Image width={1000} height={1000} src={product.image} alt={product.title} />
        </div>
        <div>
        <h1>{product.title}</h1>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        </div>
    </div>
  )
}

export default ProductDetail