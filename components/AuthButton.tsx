import { Link } from "@/src/navigation";
import { createClient } from "@/utils/supabase/server";
import { useTranslations } from "next-intl";
import User from "./user";

export default async function AuthButton() {
    const supabase = createClient();
    const t = useTranslations("Auth");

    const {
        data: { user },
    } = await supabase.auth.getUser();

    
    return user ? (
        <User />
    ) : (
        <Link className="text-black border-2 rounded-md px-4 py-2 border-black items-center flex" href="/login">
            {t("login")}
        </Link>
);
}
