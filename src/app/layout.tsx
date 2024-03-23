import type { Metadata } from "next";
import { Providers } from "@/app/_lib/providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
