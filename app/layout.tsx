import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdi Zamed Mohamed",
  description:
    "I'm Abdi Zamed Mohamed, a resourceful and self-taught full-stack developer with an enthusiasm for developing imaginative digital solutions. Through 3+ years of practical experience, I've honed my skills in transforming creative concepts into tangible software products. My journey has been marked by opportunities, I am dedicated to creating meaningful software solutions that cater to user requirements and technological innovation.",
  keywords: [
    "MERN Stack Developer",
    "MERN Stack Developer from Somalia",
    "MERN Stack Developer from Somalia in Africa",
    "Abdi Zamed Mohamed",
    "abdizamed",
    "Abdi Zamed Mohamed from Somalia",
    "React Developer from Somalia",
    "Node.js Developer from Somalia",
    "ASP.NET Developer from Somalia",
    "Data Scientist from Somalia",
    "Developer",
    "Software Engineer",
    "App Developer",
    "Web Developer",
    "Mobile App Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/icon.png"
          type="image/x-png"
          sizes="128x128"
        />
      </head>
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
