"use client"

import { Link } from "@/src/navigation";
import { UserIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AuthButton() {
    const t = useTranslations("Auth");
    
    return (
        <>
        <Link className="text-black border-2 rounded-md px-4 py-2 border-black items-center hidden sm:flex" href="/auth">
            {t("login")}
        </Link>
        <Link className="text-black border-2 rounded-md aspect-square p-2 border-black items-center flex sm:hidden" href="/auth">
            <UserIcon size={20} />
        </Link>
        </>
);
}
