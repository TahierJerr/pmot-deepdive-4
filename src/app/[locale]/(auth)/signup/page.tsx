import { createClient } from '@/utils/supabase/server';
import { Input } from '@nextui-org/input';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { SubmitButton } from './submit-button';
import { useTranslations } from 'next-intl';

const SignUpPage = () => {
    const t = useTranslations("Auth");
    
    const signUp = async (formData: FormData) => {
        "use server";
        
        const origin = headers().get("origin");
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const supabase = createClient();
        
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });
        
        if (error) {
            return redirect("/login?message=Could not authenticate user");
        }
        
        return redirect("/login?message=Check email to continue sign in process");
    };
    
    
    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="bg-slate-400 p-8 border rounded-md ">
            <h1>{t("register")}</h1>
            <form className="flex items-center flex-col gap-4 justify-center">
                <Input type="email" name="email"  placeholder="Email" />
                <Input type="password" name="password" placeholder="Password" />
                <SubmitButton formAction={signUp}>{t("register")}</SubmitButton>
            </form>
        </div>
    </div>
    )
}

export default SignUpPage