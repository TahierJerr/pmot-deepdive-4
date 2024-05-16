import { Link } from "@/src/navigation";

interface CategoryListProps {
    title: string;
    subtitle?: string;
    className?: string;
}


const CategoryList: React.FC<CategoryListProps> = ({ title, subtitle, className }) => {



  return (
    <div className={`${className} flex flex-col items-center justify-center text-center max-w-screen-lg`}>
        <div>{title + "text"}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <Link href="/robotics" className="bg-black text-white w-56 h-96 rounded-md flex justify-center items-center">image1</Link>
            <Link href="#" className="bg-black text-white">image2</Link>
            <Link href="#" className="bg-black text-white">image3</Link>
            <Link href="#" className="bg-black text-white">image4</Link>
        </div>
    </div>
  )
}

export default CategoryList