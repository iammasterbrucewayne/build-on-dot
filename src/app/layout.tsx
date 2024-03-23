import type { Metadata } from "next";
import { Providers } from "@/app/_lib/providers";
import { ColorModeScript } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Build On Dot",
  description: "Find inspiration for your next Web3 Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode="dark" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
