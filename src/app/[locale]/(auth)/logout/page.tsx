import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";

export default async function Logout() {
    const t = useTranslations("Auth");

    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }
    
    const signOut = async () => {
        "use server";
        
        const supabase = createClient();
        
        const { error } = await supabase.auth.signOut();
        
        if (error) {
            return redirect("/login?message=Could not authenticate user");
        }
        
        return redirect("/");
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-slate-400 rounded-md">
                <h1 className="text-white">{t("areyousure")}</h1>
                <Button  className="text-black border-2 rounded-md px-4 py-2 border-black items-center flex">
                    {t("cancel")}
                </Button>
                <button formAction={signOut} className="text-black border-2 rounded-md px-4 py-2 border-black items-center flex">
                    {t("logout")}
                </button>
            </div>
        </div>
    );
}