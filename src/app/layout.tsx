import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { LogoCourotamIcon } from "@/components/LogoCourotamIcon";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courotam",
  description: "Website courotam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
