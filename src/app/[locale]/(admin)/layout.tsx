import { GeistSans } from "geist/font/sans";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
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
        <main className="min-h-screen flex flex-col items-center">
          <NextIntlClientProvider messages={messages}>
          {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
