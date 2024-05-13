import { Link } from "@/src/navigation";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

export default async function AuthButton() {
    const supabase = createClient();
    const t = useTranslations("Auth");

    
    const {
        data: { user },
    } = await supabase.auth.getUser();
    
    const signOut = async () => {
        "use server";
        
        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect("/login");
    };

    
    return user ? (
        <form action={signOut}>
            <Button className="bg-red-600 text-white">
                {t("logout")}
            </Button>
        </form>
    ) : (
        <Link className="text-black border-2 rounded-md px-4 py-2 border-black items-center flex" href="/login">
            {t("login")}
        </Link>
);
}
