import type { Metadata } from "next";
import { Inter, Work_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavUI from "./components/navbar/NavUI";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clavis Wholesale App",
  description: "Welcome to Clavis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>
        <NavUI cartItemsCount={0} />
        {children}
      </body>
    </html>
  );
}
