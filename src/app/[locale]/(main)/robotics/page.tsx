import { useTranslations } from "next-intl";
import ProductList from "@/components/ui/product-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "@/src/navigation";

const RoboticsPage = () => {
    const t = useTranslations("Nav");
    const tc = useTranslations("Category");
    
    const products = [
    { id: "12a4b61b-beb1-49bb-b4e6-91c0b452ba81", title: "Aieggy", brand: "Aieggy", price: "17,99", image: "/aieggy.jpg", ages: "8-12"},
    { id: "0011885f-9fae-47ef-bb4d-3f7b4bfeae6a", title: "TacoBot", brand: "TacoBot", price: "19,99", image: "/tacobot.webp", ages: "8-12"},
    { id: "3b8f2e9f-4a7d-4e0e-9e8c-7e3a1c6d5b2a", title: "Mochi", brand: "Mochi", price: "14,99", image: "/mochi.jpg", ages: "6-9"},
    { id: "a3c1e2d4-5b6d-4f8e-9f2e-8f7b6a5c3d1b", title: "Codyblock" , brand: "Codyblock", price: "12,99", image: "/codyblock.jpg", ages: "10-14" },
    { id: "b2a1c3d5-6e7d-4f9e-8e2f-1b3d5c7a9f2e", title: "Yahboom Hellobot" , brand: "Yahboom", price: "24,99", image: "/hellobot.jpeg", ages: "10-14"},
    { id: "9e8c7a5b-3d1b-4e2f-9f8e-6d5c4b2a1c3e", title: "Yahboom Micro:bit" , brand: "Yahboom", price: "29,99", image: "/microbit.jpg", ages: "10-18" },
    ]
    
    return (
    <div className="mx-4 max-w-screen-lg mt-8">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link className="text-gray-400 underline hover:text-black transition-all" href="/">{t("home")}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        <p>{tc("robotics.title")}</p>
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>  
        <ProductList loop={true} className=" max-w-screen-lg mt-8 flex flex-col items-center justify-center" products={products} title={tc("robotics.title")} subtitle={tc("robotics.subtitle")} showAll />
    </div>
    )
}

export default RoboticsPage