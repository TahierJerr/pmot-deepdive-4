import { Products } from "@/types";
import ProductCard from "./product-card";
import { Button } from "@nextui-org/button";

interface ProductListProps {
    maxCards?: number;
    products: Products[];
    title: string;
    subtitle?: string;
    showAll?: boolean;
    className?: string;
    loop?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, maxCards, title, subtitle, showAll, className, loop }) => {
    const repeatedProducts = loop ? [...products, ...products, ...products, ...products, ...products] : products;

    return (
        <div className={className} >
            <h2 className="text-2xl font-bold flex items-center justify-center text-center">{title}</h2>
            {subtitle && <p className="max-w-lg text-default-500 flex items-center justify-center text-center">{subtitle}</p>}
            <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                {repeatedProducts.slice(0, maxCards).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            {showAll && (
                <Button className="mt-4" variant="ghost">
                    Show all
                </Button>
            )}
        </div>
    );
}

export default ProductList;
