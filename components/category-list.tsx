import { useTranslations } from "next-intl";
import CategoryCard from "./category-card";

interface CategoryListProps {
    title: string;
    subtitle?: string;
    className?: string;
}


const CategoryList: React.FC<CategoryListProps> = ({ title, subtitle, className }) => {

    const t = useTranslations('Category');

    const categories = [
        {
            title: `${t('robotics.title')}`,
            description: `${t('robotics.description')}`,
            image: '/robotics-category.jpg',
            href: '/robotics'
        },
        {
            title: `${t('arithmetic.title')}`,
            description: `${t('arithmetic.description')}`,
            image: '/arithmetic-category.webp',
            href: '#'
        },
        {
            title: `${t('physics.title')}`,
            description: `${t('physics.description')}`,
            image: '/physics-category.jpg',
            href: '#'
        },
        {
            title: `${t('woodensets.title')}`,
            description: `${t('woodensets.description')}`,
            image: '/woodensets-category.webp',
            href: '#'
        },
    
    ]

return (
    <div className={`${className} max-w-screen-lg mx-4 mt-4`}>
        <div className="mb-6">
            <p className="text-2xl font-bold">{t("category")}</p>
            <p className="text-lg">{t("explore")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {categories.map((category, index) => (
                <CategoryCard href={category.href} key={index} title={category.title} description={category.description} image={category.image} />
            ))}
        </div>
    </div>
)
}

export default CategoryList