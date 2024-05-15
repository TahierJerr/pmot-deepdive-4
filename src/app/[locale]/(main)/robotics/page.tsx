import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import { useTranslations } from "next-intl";
import HeaderRobotics from "./header";

const RoboticsSubCategoriesPage = () => {
    const t = useTranslations("Nav");
    const tc = useTranslations("Category");

    const products = [
        { title: "Aieggy", brand: "Aieggy", price: "17,99", image: "/images/robotics/aieggy.jpg", ages: "8-12"},
        { title: "TacoBot", brand: "TacoBot", price: "19,99", image: "/images/robotics/tacobot.jpg", ages: "8-12"},
        { title: "Mochi", brand: "Mochi", price: "14,99", image: "/images/robotics/mochi.jpg", ages: "6-9"},
        { title: "Codyblock" , brand: "Codyblock", price: "12,99", image: "/images/robotics/codyblock.jpg", ages: "10-14" },
        { title: "Yahboom Hellbot" , brand: "Yahboom", price: "24,99", image: "/images/robotics/yahboom-hellbot.jpg", ages: "10-14"},
        { title: "Yahboom Micro:bit" , brand: "Yahboom", price: "29,99", image: "/images/robotics/yahboom-microbit.jpg", ages: "10-18" },
    ]

  return (
    <div>
        <HeaderRobotics />
    </div>
  )
}

export default RoboticsSubCategoriesPage