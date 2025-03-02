import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/ui/Layout";

export const metadata: Metadata = {
  title: "Online Business Partner",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
