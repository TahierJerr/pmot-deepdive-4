"use client"

import { usePathname, useRouter } from '@/src/navigation';
import { Products } from '@/types'
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { ShoppingCartIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

interface ProductCardProps {
    product: Products;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const t = useTranslations("Cart");

    const router = useRouter();

    const pathname = usePathname();

    const handleClick = () => {
        router.push(`${pathname}/${product.id}`);
    }

return (
    <div onClick={handleClick} className='cursor-pointer'>
        <Card className="py-4 cursor-pointer  max-w-80 sm:max-w-72 h-full flex flex-col justify-between">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{product.title}</p>
                <small className="text-default-500">{product.brand}</small>
                <h4 className="font-bold text-large">€{product.price}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex-grow">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex-shrink-0 border border-slate-200 rounded-md aspect-square flex items-center justify-center">
                        <Image
                            alt={product.title}
                            width={1000}
                            height={1000}
                            className="object-cover rounded-xl"
                            src={product.image}
                        />
                    </div>
                    <Button className="mt-4 flex items-center justify-center text-center bg-red-500 text-white" startContent={<ShoppingCartIcon size={20} />}>{t("add")}</Button>
                </div>
            </CardBody>
        </Card>
    </div>
)
}

export default ProductCard