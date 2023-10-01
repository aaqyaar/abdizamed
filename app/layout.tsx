import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdi Zamed Mohamed",
  description:
    "I'm Abdi Zamed Mohamed, a resourceful and self-taught full-stack developer with an enthusiasm for developing imaginative digital solutions. Through 3+ years of practical experience, I've honed my skills in transforming creative concepts into tangible software products. My journey has been marked by opportunities, I am dedicated to creating meaningful software solutions that cater to user requirements and technological innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
