import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavbarComponent from "@/components/navbar-component";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import CategoryNavbar from "@/components/category-navbar";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
  

export const metadata = {

  metadataBase: new URL(defaultUrl),
  title: "PMOT",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();


  return (
    <html lang={locale} className={GeistSans.className}>
      <body>
        <main className="  min-h-[2000px] flex flex-col items-center">
          <NextIntlClientProvider messages={messages}>
          <NavbarComponent />
          <CategoryNavbar />
          {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
