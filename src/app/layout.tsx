import SideNavigation from "@/components/atoms/Navigation";
import type { Metadata } from "next";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Pokémon",
  description: "A List of Pokémon",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <SideNavigation />
          {children}
        </body>
      </Providers>
    </html>
  );
}