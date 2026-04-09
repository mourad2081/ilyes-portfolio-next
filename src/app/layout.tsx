import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LanguageProvider } from "@/hooks/use-language";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ilyes Boudissa | Senior Procurement Specialist",
  description:
    "Senior Procurement Specialist and Project Manager expert in strategic sourcing, vendor negotiation, and OTIF optimization for EPC and industrial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
