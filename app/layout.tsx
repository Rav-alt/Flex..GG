import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flex.GG — your gamer identity, one link",
  description:
    "Flex your ranks, stats, clips, and achievements — all in one shareable link.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // data-theme here applies the forest theme globally to every page
    <html lang="en" data-theme="forest">
      <body className="bg-base-100 text-base-content antialiased">
        {children}
      </body>
    </html>
  );
}
