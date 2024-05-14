import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { useTranslations } from "next-intl";
import { Input } from "@nextui-org/input";

export default function Login() {
    const t = useTranslations("Auth");

  const signInWithEmail = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="bg-slate-400 p-8 border rounded-md ">
            <h1>{t("login")}</h1>
            <form className="flex items-center flex-col gap-4 justify-center">
                <Input type="email" name="email"  placeholder="Email" />
                <Input type="password" name="password" placeholder="Password" />
                <SubmitButton formAction={signInWithEmail}>{t("login")}</SubmitButton>
            </form>
        </div>
    </div>
  );
}