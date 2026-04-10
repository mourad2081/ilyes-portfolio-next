import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LanguageProvider } from "@/hooks/use-language";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import CustomCursor from "@/components/ui/custom-cursor";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <CustomCursor />
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
