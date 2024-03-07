import SideNavigation from "@/components/atoms/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Characters",
  description: "A list of Star Wars characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNavigation />
        {children}
        </body>
    </html>
  );
}
