import { Link } from '@/src/navigation'
import { Button } from '@nextui-org/button';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';

interface CategoryCardProps {
    title: string;
    description: string;
    image: string;
    href: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, image, href }) => {
    return (
    <Link href={href} className=" border shadow-lg text-white min-w-48 sm:w-72 h-96 rounded-md flex justify-center items-center relative max-w-56">
        <Image src={image} alt={title} fill objectFit="cover" className='rounded-md' />
        <div className="absolute rounded-md bottom-0 left-0 text-black text-left flex justify-start flex-col items-start w-full backdrop-blur-sm bg-white/30 py-2">
            <p className="text-xl ml-2 font-bold">{title}</p>
            <p className="text-xs ml-2">{description}</p>
            <div className='w-full flex items-center justify-center mt-2'>
            <Button endContent={<ChevronRightIcon size={20} />} className='bg-red-500 text-white rounded-md border-2 min-w-52 border-red-500 hover:text-red-500 hover:bg-white font-semibold'>Go to {title}</Button>
            </div>
        </div>
    </Link>
    )
}

export default CategoryCard