import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LanguageProvider } from "@/hooks/use-language";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/ui/scroll-progress";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
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
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
