"use client"

import { Products } from '@/types';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { MinusIcon, PlusIcon, ShoppingCartIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './breadcrumb';
import { Link } from '@/src/navigation';

interface ProductDetailProps {
    product: Products;
    classname?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const t = useTranslations('Cart');
    const tc = useTranslations('Category');
    const tn = useTranslations('Nav');

    const addOne = () => {
        setQuantity(quantity + 1);
    };

    const removeOne = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
        <Breadcrumb className="">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link className="text-gray-400 underline hover:text-black transition-all" href="/">{tn("home")}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <Link className=" text-gray-400 underline hover:text-black transition-all" href="/robotics">{tc("robotics.title")}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        <p className="">{product.title}</p>
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
            
        </Breadcrumb>  
        <div className='grid sm:grid-cols-2 gap-4'>
            <div>
                <div className='max-w-sm grid aspect-square flex-shrink-0 h-full rounded-md'>
                <Image width={1000} height={1000} src={product.image} alt={product.title} />
                </div>
                <div>

                </div>
            </div>
            <div className=''>
                <h1 className='text-2xl font-semibold'>{product.title}</h1>
                <p className='text-lg font-semibold mb-10'>€{product.price}</p>
                <Input
                errorMessage
                    label={t('quantity')}
                    labelPlacement='outside'
                    variant='bordered'
                    type='number'
                    size='md'
                    className='w-1/4 h-11 rounded-md text-center borderflex items-center justify-center'
                    min={1}
                    value={quantity.toString()}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    startContent={<MinusIcon className='cursor-pointer' onClick={removeOne} size={22} />}
                    endContent={<PlusIcon className='cursor-pointer' onClick={addOne} size={22} />}
                />
                <Button fullWidth className='mt-4 bg-red-500 text-white border' variant='flat' color='primary' startContent={<ShoppingCartIcon size={20} />}>{t("add")}</Button>
            </div>
        </div>
        </>
    );
};

export default ProductDetail;