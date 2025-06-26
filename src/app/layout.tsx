import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Filing",
  description: "The UK is killing free company filings. We're building a free, open-source alternative to protect startups, micro-entities & indie hackers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
