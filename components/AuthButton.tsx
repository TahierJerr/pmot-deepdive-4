"use client"

import { Link } from "@/src/navigation";
import { useTranslations } from "next-intl";

export default async function AuthButton() {
    const t = useTranslations("Auth");
    
    return (
        <Link className="text-black border-2 rounded-md px-4 py-2 border-black items-center flex" href="/auth">
            {t("login")}
        </Link>
);
}
